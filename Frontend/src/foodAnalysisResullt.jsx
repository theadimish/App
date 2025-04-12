import React from 'react';
import styles from './FoodAnalysisResult.module.css';

const foodAnalysisResult = ({ food, nutrition }) => {
  if (!food || !nutrition) return null;

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.heading}>🍽️ Food Analysis</h2>
      <p><strong>Food Detected:</strong> {food}</p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Calories</th>
              <th className={styles.th}>Protein</th>
              <th className={styles.th}>Carbs</th>
              <th className={styles.th}>Fats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>{nutrition.calories}</td>
              <td className={styles.td}>{nutrition.protein}</td>
              <td className={styles.td}>{nutrition.carbs}</td>
              <td className={styles.td}>{nutrition.fat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default foodAnalysisResult;
