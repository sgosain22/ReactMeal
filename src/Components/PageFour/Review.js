import React from "react";
import '../Meal.css';
import {Link} from 'react-router-dom';

function ReviewPage() {
  return (
    <>
     <div id="wrapper">
      <div className="phase_four"></div>
      {/* <div className="navbar">
        <div className="step1"><a href="index.html">Step1</a></div>
        <div className="step2"><a href="page2.html">Step2</a></div>
        <div className="step3"><a href="page3.html">Step3</a></div>
        <div className="review current"><a href="page4.html">Review</a></div>
      </div> */}
      
      <div className="box">
        <div  className="innerBox">
          <h4>Meal:</h4>
          <p id="inner_box_one">Lunch</p>
        </div>
        <div className="innerBox">
          <h4>No. of People:</h4>
          <p id="inner_box_two">2</p>
        </div>
        <div className="innerBox">
          <h4>Restaurant:</h4>
          <p id="inner_box_three">McDonald</p>
        </div>
        <div className="innerBox">
          <h4>Dish Name:</h4>
          <p id="inner_box_four">Burger</p>
        </div>
        <div className="innerBox">
          <h4>Dish Quantity:</h4>
          <p id="inner_box_five">4</p>
        </div>
      </div>
        
     

     

        <div className="phase_four_next_btn">
            <button type="button"  className="btn btn-primary">
                {/* <a href="page4.html" id="btnFour" >Submit</a> */}
                <Link to="/ReviewPage">Submit</Link>
            </button>
          </div>
    </div>
     
    </>
  );
}

export default ReviewPage;
