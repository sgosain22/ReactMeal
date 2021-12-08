import React from "react";
import "./App.css";
import Meal from "./Components/PageOne/Meal.js";
import MealStepTwo from "./Components/PageTwo/MealStepTwo";
import MealStepTree from "./Components/PageThree/MealStepTree";
import ReviewPage from "./Components/PageFour/Review";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <div id="wrapper">
      <div className="navbarFist">
        <div className="step1" current>
          <Link to="/">Step1</Link>
        </div>
        <div className="step2" current>
          <Link to="/MealStepTwo">Step2</Link>
        </div>
        <div className="step3" current>
          <Link to="/MealStepTree">Step3</Link>
        </div>
        <div className="review" current>
          <Link to="/ReviewPage">Review</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/MealStepTwo" element={<MealStepTwo />} />
        <Route path="/MealStepTree" element={<MealStepTree />} />
        <Route path="/ReviewPage" element={<ReviewPage />} />
      </Routes>
      </div>
      
    </>
  );
}

export default App;
