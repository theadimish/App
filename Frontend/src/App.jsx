import React, { useRef } from 'react';
import styles from './App.module.css';
import CaptureImage from './captureImage.jsx';
import DailyNutritionLog from './DailyNutritionLog.jsx';
import Footer from './footer.jsx';
import Cards from './cards.jsx';
import Navbar from './navbar.jsx';
import Bmical from './bmiCal.jsx';
import DietPlan from './dietPlan.jsx';
import Community from './community.jsx';
import Exercise from './exercise.jsx';

function App() {
  const homeRef = useRef(null);
  const foodAIRef = useRef(null);
  const nutritionRef = useRef(null);
  const bmiRef = useRef(null);
  const exerciseRef = useRef(null);
  const communityRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.app}>
        <div className={styles.navbarSection}>
          <Navbar
            onHomeClick={() => scrollToRef(homeRef)}
            onFoodAIClick={() => scrollToRef(foodAIRef)}
            onNutritionClick={() => scrollToRef(nutritionRef)}
            onBMIClick={() => scrollToRef(bmiRef)}
            onExerciseClick={() => scrollToRef(exerciseRef)}
            onCommunityClick={() => scrollToRef(communityRef)}
          />
        </div>

        <div className={styles.cardsSection} ref={homeRef}>
          <Cards />
        </div>

        <main className={styles.appMain}>
          <div className={styles.captureSection} ref={foodAIRef}>
            <CaptureImage />
          </div>

          <div className={styles.bmiSection} ref={bmiRef}>
            <Bmical />
          </div>

          <div className={styles.dietPlanSection}>
            <DietPlan />
          </div>

          <div className={styles.logSection} ref={nutritionRef}>
            <DailyNutritionLog />
          </div>

          <div className={styles.exerciseSection} ref={exerciseRef}>
            <Exercise />
          </div>

          <div className={styles.communitySection} ref={communityRef}>
            <Community />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
