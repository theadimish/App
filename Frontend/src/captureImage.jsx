import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Style from './CaptureImage.module.css';
import axios from 'axios';
import FoodAnalysisResult from './foodAnalysisResullt.jsx';

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: 'environment',
};

const CaptureImage = () => {
  const [preview, setPreview] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [foodResult, setFoodResult] = useState(null);
  const [error, setError] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPreview(imageSrc);
      sendToBackend(imageSrc);
      setShowCamera(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        sendToBackend(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendToBackend = async (base64Image) => {
    try {
      const response = await axios.post('http://localhost:5000/api/track-food', {
        image: base64Image,
      });
      console.log('Response from backend:', response.data);
      setFoodResult(response.data);
      setError(null);
    } catch (err) {
      console.error('Error sending image to backend:', err);
      setFoodResult(null);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={Style.captureImage}>
      <h2 className={Style.heading}>Capture or Upload Food Image</h2>
      <p className={Style.subtext}>Click below to capture or upload a photo of your food.</p>

      <div className={Style.buttonGroup}>
        <button className={Style.captureButton} onClick={() => setShowCamera(!showCamera)}>
          {showCamera ? '🔙 Cancel Camera' : '📸 Use Camera'}
        </button>

        <label htmlFor="upload-input" className={Style.uploadButton}>
          📁 Upload from System
        </label>
        <input
          type="file"
          id="upload-input"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
        />
      </div>

      {showCamera && (
        <div className={Style.webcamContainer}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
          <button className={Style.captureButton} onClick={handleCapture}>📷 Capture</button>
        </div>
      )}

      {preview && (
        <div className={Style.previewSection}>
          <p><strong>Preview:</strong></p>
          <img src={preview} alt="Captured or Uploaded food" className={Style.imagePreview} />
        </div>
      )}

      {error && (
        <div className={Style.errorSection}>
          <p>❌ {error}</p>
        </div>
      )}

      {foodResult && !foodResult.error && (
        <FoodAnalysisResult
          food={foodResult.name}
          nutrition={{
            calories: foodResult.calories,
            protein: foodResult.protein,
            carbs: foodResult.carbs,
            fat: foodResult.fat,
          }}
        />
      )}

      {foodResult?.error && (
        <div className={Style.errorSection}>
          <p>⚠️ {foodResult.error}</p>
        </div>
      )}
    </div>
  );
};

export default CaptureImage;
