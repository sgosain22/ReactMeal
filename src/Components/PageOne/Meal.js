import React from "react"
import '../Meal.css';
import {Link} from 'react-router-dom';


function Meal() {
  return (
    <>

      {/* <!-- step one start--> */}
      <div id="wrapper">
      <div className="phase_one">
        <div id="wrapper">
          {/* <div className="navbar">
            <div className="step1 current">
              <Link to="/">Step1</Link>
            </div>
            <div className="step2">
              <Link to="/MealStepTwo">Step2</Link>
            </div>
            <div className="step3">
              <Link to="/MealStepTree">Step3</Link>
            </div>
            <div className="review">
              <Link to="/ReviewPage">Review</Link>
            </div>
          </div> */}
          <div className="meal_selection">
            <p>Please select a Meal</p>
            <select
              id="three_meal"
              className="form-select"
              aria-label="Default select example"
            >
              <option >---</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          <div className="guest_number">
            <p>Please Enter number of people</p>
            <select
              id="guest_quantity"
              className="form-select"
              aria-label="Default select example"
            >
              <option >---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="next_btn">
            <button type="button" id="btnOne" className="btn btn-primary">
            <Link to="/MealStepTwo">Next</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- step one end--> */}
    </>
  );
}

export default Meal;
