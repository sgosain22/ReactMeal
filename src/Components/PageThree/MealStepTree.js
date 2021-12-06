import React from "react";
import '../Meal.css';
import {Link} from 'react-router-dom';

function MealStepTree() {
  return (
    <>
   
      {/* <!-- step three start--> */}
      <div id="wrapper">
      <div className="phase_three">
        {/* <div className="navbar">
          <div className="step1"><Link to="/">Step1</Link></div>
          <div className="step2"><Link to="/MealStepTwo">Step2</Link></div>
          <div className="step3 current"><Link to="/MealStepTree">Step3</Link></div>
          <div className="review"><Link to="/ReviewPage">Review</Link></div>
        </div> */}
        <div id="select_complete_dish">
          <div className="row"></div>

          <div id="extra_selection" className="select_dish col-sm-7">
            <p>Please select a Dish</p>
            <select
              id="formSelectDish"
              className="form-select"
              aria-label="Default select example"
            >
              <option >---</option>
            </select>
          </div>
          <div id="extra" className="serving_number col-sm-5">
            <p>Please Enter no. of servings</p>
            <input id="serving_no" type="number" name="serving" />
          </div>
        </div>
        <div className="more_item">
          <button id="add">Add</button>
        </div>
        <div className="phase_three_previous_btn">
          <button type="button" className="btn btn-primary">
          <Link to="/MealStepTwo">Previous</Link>
          </button>
        </div>
        <div className="phase_three_next_btn">
          <button
            type="button"
            id="btnThree"
            className="btn btn-primary"
            onClick=""
          >
            <Link to="/ReviewPage">Next</Link>
          </button>
        </div>
      </div>
</div>
      {/* <!-- step three end--> */}
    
     
    </>
  );
}

export default MealStepTree;
