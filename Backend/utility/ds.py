import json
import os

def get_nutrition_from_json(food_name):
    food_name = food_name.strip().lower()

    json_path = os.path.join(os.path.dirname(__file__), 'food_macros.json')
    with open(json_path, 'r') as f:
        data = json.load(f)

    for item in data:
        if item['name'].strip().lower() == food_name:
            return item

    return {
        "calories": "Unknown",
        "protein": "Unknown",
        "carbs": "Unknown",
        "fat": "Unknown"
    }
