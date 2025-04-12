import React from "react";
import styles from './DietPlan.module.css';

const dietPlans = [
  {
    budget: 500,
    protein: "Paneer - 45g × 7 days @ ₹50/serving = ₹350",
    fiber: "Salad (Basic Greens) - 3 days @ ₹30 = ₹90",
    hydration: "Lemon Water - 5 days @ ₹10 = ₹50",
    total: 490,
    remaining: 10,
  },
  {
    budget: 1000,
    protein: "Paneer - 55g × 7 days @ ₹90/serving = ₹630",
    fiber: "Salad (Mixed Vegetables) - 4 days @ ₹60 = ₹240",
    hydration: "Lemon Water - 7 days @ ₹18 = ₹126",
    total: 996,
    remaining: 4,
  },
  {
    budget: 1500,
    protein: "Paneer - 65g × 7 days @ ₹110/serving = ₹770",
    fiber: "Salad (Mixed Greens + Cucumber) - 5 days @ ₹65 = ₹325",
    hydration: "Lemon Water - 7 days @ ₹20 = ₹140",
    total: 1235,
    remaining: 265,
  },
  {
    budget: 2000,
    protein: "Paneer - 70g × 7 days @ ₹120/serving = ₹840",
    fiber: "Salad (Greens, Tomatoes, Carrots) - 6 days @ ₹70 = ₹420",
    hydration: "Coconut Water - 7 days @ ₹60 = ₹420",
    total: 1680,
    remaining: 320,
  },
];

const DietPlan = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Weekly Diet Plans</h1>
      <div className={styles.planContainer}>
        {dietPlans.map((plan, idx) => (
          <div className={styles.planCard} key={idx}>
            <h2>Budget: ₹{plan.budget} /week</h2>

            <div className={styles.sectionTitle}>Protein</div>
            <div className={styles.item}>{plan.protein}</div>

            <div className={styles.sectionTitle}>Fiber</div>
            <div className={styles.item}>{plan.fiber}</div>

            <div className={styles.sectionTitle}>Hydration</div>
            <div className={styles.item}>{plan.hydration}</div>

            <div className={styles.summary}>
              <p>Total Used: ₹{plan.total}</p>
              <p>Remaining Budget: ₹{plan.remaining}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlan;