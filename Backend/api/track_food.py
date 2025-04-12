from flask import Blueprint, request, jsonify
import base64
import os
from hashlib import md5
from models.ml import search_image_name
from utility.ds import get_nutrition_from_json
from PIL import Image
import io

track_food_bp = Blueprint('track_food_bp', __name__)

# Directory setup
INPUT_DIR = 'input_images'
PROCESSED_DIR = 'processed_images'

os.makedirs(INPUT_DIR, exist_ok=True)
os.makedirs(PROCESSED_DIR, exist_ok=True)

@track_food_bp.route('/api/track-food', methods=['POST'])
def track_food():
    try:
        data = request.get_json(force=True)

        image_base64 = data.get('image')
        if not image_base64 or ',' not in image_base64:
            return jsonify({'error': 'Valid base64 image is required'}), 400

        # Decode base64 to bytes
        try:
            image_bytes = base64.b64decode(image_base64.split(',')[1])
        except Exception:
            return jsonify({'error': 'Invalid base64 encoding'}), 400

        # Convert image bytes to PIL Image
        try:
            image = Image.open(io.BytesIO(image_bytes))
        except Exception as e:
            return jsonify({'error': 'Failed to read image'}), 400

        # Save temporarily to memory to predict
        temp_path = os.path.join(INPUT_DIR, "temp_predict.png")
        image.save(temp_path)

        # Predict food name
        predicted_name = search_image_name(temp_path)

        # Remove temp image
        if os.path.exists(temp_path):
            os.remove(temp_path)

        if not predicted_name:
            return jsonify({'error': 'Could not identify the food'}), 404

        # Get nutrition info
        nutrition_info = get_nutrition_from_json(predicted_name)
        if not nutrition_info:
            return jsonify({'error': f'No nutrition data found for {predicted_name}'}), 404

        # Save the image (optional): Only if you want to archive good predictions
        image_hash = md5(image_bytes).hexdigest()
        processed_path = os.path.join(PROCESSED_DIR, f"{image_hash}.png")
        if not os.path.exists(processed_path):
            image.save(processed_path)

        result = {
            "name": predicted_name,
            "calories": nutrition_info.get("calories", 0),
            "protein": nutrition_info.get("protein", 0),
            "carbs": nutrition_info.get("carbs", 0),
            "fat": nutrition_info.get("fat", 0)
        }

        print("✅ JSON sent to frontend:", result)
        return jsonify(result), 200

    except Exception as e:
        print("❌ Server error:", str(e))
        return jsonify({'error': str(e)}), 500
