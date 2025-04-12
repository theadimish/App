import Style from './Cards.module.css';

const cardsData = [
  {
    front: "Food Detection AI",
    back: "Automatically identify and analyze food items from images using AI."
  },
  {
    front: "BMI",
    back: "Calculate your Body Mass Index to assess your weight category."
  },
  {
    front: "Diet Plans",
    back: "Get personalized diet recommendations based on your goals and health data."
  },
  {
    front: "Nutrition Log",
    back: "Track daily food intake and monitor calories, macros, and nutrients."
  },
  {
    front: "Exercise",
    back: "Browse and log workouts, get suggestions tailored to your fitness level."
  },
  {
    front: "Community Poll",
    back: "Engage in health-based polls and see how your habits compare with others."
  }
];

const Cards = () => {
  return (
    <div className={Style.container}>
      {cardsData.map((card, index) => (
        <div key={index} className={Style["flip-box"]}>
          <div className={Style["flip-box-inner"]}>
            <div className={Style["flip-box-front"]}>{card.front}</div>
            <div className={Style["flip-box-back"]}><b>{card.back}</b></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
