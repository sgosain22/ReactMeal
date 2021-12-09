import React, { useState } from "react";
import "../Meal.css";
import { Link } from "react-router-dom";

function ReviewPage() {
  const [formData, setFormData] = useState({
    meal_type: "",
    NOP: "",
    restro: "",
    dishes: [],
    NOD: "",
  });
  // const dish = { name: "", qty: "" };

  const local = JSON.parse(localStorage.getItem("list "));
  console.log(local);

  return (
    <>
      <div id="wrapper">
        <div className="phase_four"></div>
        <div className="navbar">
            <div className="step4 current"><Link to="/ReviewPage">Review</Link></div>
          </div>
        <div className="box">
          <div className="innerBox">
            <h4>Meal:</h4>
            <p id="inner_box_one">{local.meal_type}</p>
          </div>
          <div className="innerBox">
            <h4>No. of People:</h4>
            <p id="inner_box_two">{local.NOP}</p>
          </div>
          <div className="innerBox">
            <h4>Restaurant:</h4>
            <p id="inner_box_three">{local.restro}</p>
          </div>
          <div className="innerBox">

            <thead >
                <tr>
                <th style= {{border:"1px solid white", color:"white", padding:"5px"}}>Dish Name</th>
                <th style= {{border:"1px solid white", color:"white",  padding:"5px"}}>Dish Quantity</th>
                </tr>
            
            </thead>
            <tbody>

            {
              local.dishes.map((q,i)=>{
              return(
                <tr>
                <th id="inner_box_four" style= {{border:"1px solid white", color:"white", padding:"5px", fontSize: "12px",
    textAlign: "center"}}>{q}</th>
                <th id="inner_box_five" style= {{border:"1px solid white", color:"white", padding:"5px", fontSize: "12px",
    textAlign: "center"}}>{local.NOD[i]}</th>
              </tr>

              )
              })
            }
              
            </tbody>
            
          </div>
          <div className="innerBox">
            
          </div>
        </div>

        <div className="phase_four_next_btn">
          <button type="button" className="btn btn-primary">
            {/* <a href="page4.html" id="btnFour" >Submit</a> */}
            <Link to="/ReviewPage">Submit</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ReviewPage;
