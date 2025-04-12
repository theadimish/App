# 🍽️ Foodie - Your Smart Healthcare Companion

**Foodie** is a full-stack healthcare web app designed to help users track food intake, understand their nutritional habits, and achieve personal health goals. Built with image recognition, BMR calculation, and personalized fitness suggestions, it's your digital health coach in your pocket.

Developed by **Loader Logic** — a passionate group of developers dedicated to wellness through tech.

---

## 👥 Team: Loader Logic
- Surath  
- Amam  
- Aditya  
- Ankesh

---

## 🚀 Features & Benefits

### 🥗 Food Prediction
- Upload a food image and detect what you're eating.
- Get macro details like calories, protein, carbs, and fats.

### 🔢 BMR & Caloric Needs
- Calculate Basal Metabolic Rate (BMR) using personal metrics.
- Personalized calorie needs for goals like weight loss, maintenance, or gain.

### 🍽️ Diet Suggestions
- Curated meal plans based on calorie needs and dietary goals.

### 🏋️ Exercise Guidance
- Fitness routines for strength, cardio, and flexibility.
- Suggestions based on fitness levels and goals.

### 🎯 Health Goals Tracking
- Set goals, log food, track progress with ease.

---

## 🧱 Project Structure

### 🔹 Frontend
Frontend/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx

### 🔹 Backend
Backend/
├── api/
│   └── track_food.py
├── utility/
│   ├── ds.py
│   └── food_macros.json
├── input_images/
├── processed_images/
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   └── 4.jpeg
├── models/
│   └── ml.py
├── main.py
├── .env
└── requirements.txt

---

## 💡 Tech Stack

| Tech          | Purpose                         |
|---------------|----------------------------------|
| React         | Frontend interface               |
| Flask         | Backend API                      |
| Python        | Backend logic, ML model          |
| OpenCV/Pillow | Image processing                 |
| JSON          | Food macro dataset               |
| Machine Learning | Food detection and prediction |

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/foodie.git
cd foodie
2️⃣ Backend Setup
bash
Copy
Edit
cd Backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
Make sure to add a .env file for environment variables (e.g., if you're using API keys).

Run the backend:

bash
Copy
Edit
python main.py
3️⃣ Frontend Setup
bash
Copy
Edit
cd Frontend
npm install
npm run dev
Your frontend should now be running at http://localhost:5173/ (or as specified in your Vite config).

📸 How It Works
Upload food image via frontend.

Image sent to backend → processed using ML model.

Nutrition info fetched from food_macros.json.

User's BMR calculated.

Personalized suggestions displayed.

📌 Future Improvements
Improve ML model with diverse food dataset.

Add authentication and user history tracking.

Deploy backend and frontend to cloud (e.g., Render, Vercel).

Add chatbot integration and voice logging.

Android/iOS app version.

📝 License
This project is for educational and demonstration purposes only.

📬 Contact
Have ideas or feedback? Reach out or open an issue!

Made with ❤️ by Loader Logic
