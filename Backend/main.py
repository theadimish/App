

#our folder structure is like this:
# Backend
# ├── api
# │   ├── track_food.py
# ├── utility
# │   ├── ds.py
# │   ├── food_macros.json
# ├── input_images
# ├── processed_images
# ├──   |--> ├── 1.jpeg
# ├──   |--> ├── 2.jpeg
# ├──   |--> ├── 3.jpeg
# ├──   |--> ├── 4.jpeg........
# ├── models
# │   ├── ml.py
# │main.py
# └── requirements.txt

from flask import Flask
from flask_cors import CORS
from api.track_food import track_food_bp

app = Flask(__name__)
CORS(app)

# Register the blueprint
app.register_blueprint(track_food_bp)

if __name__ == '__main__':
    app.run(debug=True)