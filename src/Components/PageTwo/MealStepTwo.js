import React, { useState } from "react";
import "../Meal.css";
import { Link } from "react-router-dom";

// JSON data starts



// JSON data ends..

function MealStepTwo() {
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
  var res = [];
  const uniq = [...new Set(res)];
  console.log(uniq, "uniow");

  const submitfun = () => {
    console.log(local, formData, "lkl");

    localStorage.setItem(
      "list ",
      JSON.stringify({ ...local, restro: formData.restro })
    );
  };

  return (
    <>
      {/* <!-- step two start--> */}
      <div id="wrapper">
        <div className="phase_two">
          <div className="navbar">
            <div className="step2 current">
              <Link to="/MealStepTwo">Step2</Link>
            </div>
          </div>
          <div className="restaurant_selection">
            <p>Please select a Restaurant</p>

            <select
              id="res_list"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setFormData({ ...formData, restro: e.target.value });
              }}
            >
              <option value="">Select</option>
              {uniq.map((dishes) => (
                <option>{dishes}</option>
              ))}
            </select>
          </div>
          <div className="phase_two_previous_btn">
            <button type="button" className="btn btn-primary">
              <Link to="/">Previos</Link>
            </button>
          </div>
          <div className="phase_two_next_btn">
            <button
              type="button"
              id="btnTwo"
              className="btn btn-primary"
              onClick={() => {
                submitfun();
              }}
            >
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
