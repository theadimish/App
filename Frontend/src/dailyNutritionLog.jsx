import React, { useEffect, useState } from 'react';
import styles from './dailyNutritionLog.module.css';

const DailyNutritionLog = () => {
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    fetch('/nutritionDatabase.json')
      .then(response => response.json())
      .then(data => setNutritionData(data))
      .catch(error => console.error('Error loading nutrition data:', error));
  }, []);

  return (
    <div className={styles.dailyNutritionLog}>
      <h2 className={styles.heading}>Daily Nutrition Log</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.nutritionTable}>
          <thead>
            <tr>
              <th>Age Range</th>
              <th>Calories</th>
              <th>Protein (g)</th>
              <th>Carbs (g)</th>
              <th>Fat (g)</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.ageRange}</td>
                <td>{entry.calories}</td>
                <td>{entry.protein}</td>
                <td>{entry.carbs}</td>
                <td>{entry.fat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyNutritionLog;
