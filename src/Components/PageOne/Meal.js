import React, { useState } from "react";
import "../Meal.css";
import { Link } from "react-router-dom";

function Meal() {
  const [formData, setFormData] = useState({
    meal_type: "",
    NOP: "",
    restro: "",
    dishes: [],
    NOD: "",
  });
  // const dish = {name: '', qty: ''};

  // add data to local storage

  const submitfun = () => {
    console.log(formData);
    localStorage.setItem("list ", JSON.stringify(formData));
  };

  return (
    <>
      {/* <!-- step one start--> */}
      <div id="wrapper">
        <div className="phase_one">
          <div className="navbar">
            <div className="step1 current">
              <Link to="/">Step1</Link>
            </div>
          </div>
          <div id="wrapper">
            <div className="meal_selection">
              <p>Please select a Meal</p>
              <select
                id="three_meal"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  console.log(e.target.value);
                  setFormData({ ...formData, meal_type: e.target.value });
                }}
              >
                <option>Select</option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="dinner">dinner</option>
              </select>
            </div>
            <div className="guest_number">
              <p>Please Enter number of people</p>
              <select
                id="guest_quantity"
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  console.log(e.target.value);
                  setFormData({ ...formData, NOP: e.target.value });
                }}
              >
                <option>Select</option>
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
              <button
                type="button"
                id="btnOne"
                className="btn btn-primary"
                onClick={() => {
                  submitfun();
                }}
              >
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
