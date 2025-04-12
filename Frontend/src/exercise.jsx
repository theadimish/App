import React, { useState } from "react";
import styles from "./Exercise.module.css";

const workoutData = [
  { range: "0-45", steps: 800, lifting: 10, stretching: 15 },
  { range: "46-55", steps: 1000, lifting: 15, stretching: 15 },
  { range: "56-65", steps: 1200, lifting: 20, stretching: 15 },
  { range: "66-75", steps: 1400, lifting: 25, stretching: 10 },
  { range: "76-85", steps: 1600, lifting: 30, stretching: 10 },
  { range: "86-95", steps: 1800, lifting: 35, stretching: 10 },
  { range: "95+", steps: 2000, lifting: 40, stretching: 10 },
];

const getBackgroundColor = (age) => {
  if (age <= 45) return "#FFB6C1"; // Light Pink
  if (age <= 55) return "#87CEFA"; // Light Blue
  if (age <= 65) return "#90EE90"; // Light Green
  if (age <= 75) return "#FFD700"; // Gold
  return "#D3D3D3"; // Light Gray
};

const Exercise = () => {
  const [age, setAge] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleChange = (e) => setAge(e.target.value);

  const handleSubmit = () => {
    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge < 0) {
      alert("Please enter a valid age.");
      return;
    }
    setBgColor(getBackgroundColor(parsedAge));
  };

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <h1>Enter Your Age</h1>
      <div className={styles.inputContainer}>
        <input
          type="number"
          value={age}
          onChange={handleChange}
          placeholder="Your age..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <h2>Workout Plan by Weight Range</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Weight Range (kg)</th>
            <th>Steps</th>
            <th>Weight Lifting (min)</th>
            <th>Stretching (min)</th>
          </tr>
        </thead>
        <tbody>
          {workoutData.map((row, idx) => (
            <tr key={idx}>
              <td data-label="Weight Range (kg)">{row.range}</td>
              <td data-label="Steps">{row.steps}</td>
              <td data-label="Weight Lifting (min)">{row.lifting}</td>
              <td data-label="Stretching (min)">{row.stretching}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise;