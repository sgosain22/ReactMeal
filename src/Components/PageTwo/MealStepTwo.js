import React from "react";
import '../Meal.css';
import {Link} from 'react-router-dom';

function MealStepTwo() {
  return (
    <>
    {/* <!-- step two start--> */}
         <div id="wrapper">
     <div className="phase_two">
        {/* <div className="navbar">
            <div className="step1"> <Link to="/">Step1</Link> </div>
            <div className="step2 current"><Link to="/MealStepTwo">Step2</Link></div>
            <div className="step3"><Link to="/MealStepTree">Step3</Link></div>
            <div className="review"><Link to="/ReviewPage">Review</Link></div>
          </div> */}
        <div  className="restaurant_selection">
          <p>Please select a Restaurant</p>
          <select id="res_list" className="form-select"  aria-label="Default select example">
            <option selected >---</option>
          </select>
        </div>
        <div className="phase_two_previous_btn">
          <button type="button" className="btn btn-primary">
          <Link to="/">Previos</Link>
          </button>
        </div>
        <div  className="phase_two_next_btn">
          <button type="button" id="btnTwo" className="btn btn-primary" >
          <Link to="/MealStepTree">Next</Link>
          </button>
        </div>
      </div>
</div>
      {/* <!-- step two end--> */}
     
    </>
  );
}

export default MealStepTwo;
