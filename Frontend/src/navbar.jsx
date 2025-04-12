import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({
  onHomeClick,
  onFoodAIClick,
  onNutritionClick,
  onBMIClick,
  onExerciseClick,
  onCommunityClick,
}) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles['left-side']}>
          <div className={styles['profile-icon']} id="profileIcon">F</div>
          <div className={styles['welcome-message']} id="welcomeMessage">Welcome to Foodie</div>
        </div>

        <div className={styles['nav-buttons']}>
          <button className={styles['nav-button']} onClick={onHomeClick}>
            <span className="material-icons">home</span>Home
          </button>
          <button className={styles['nav-button']} onClick={onFoodAIClick}>
            <span className="material-icons">search</span>Food AI
          </button>
          <button className={styles['nav-button']} onClick={onNutritionClick}>
            <span className="material-icons">restaurant</span>Nutrition
          </button>
          <button className={styles['nav-button']} onClick={onExerciseClick}>
            <span className="material-icons">fitness_center</span>Exercise
          </button>
          <button className={styles['nav-button']} onClick={onBMIClick}>
            <span className="material-icons">monitor_weight</span>BMI
          </button>
          <button className={styles['nav-button']} onClick={onCommunityClick}>
            <span className="material-icons">groups</span>Community
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
