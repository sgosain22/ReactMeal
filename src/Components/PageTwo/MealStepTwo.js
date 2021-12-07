import React, { useState } from "react";
import "../Meal.css";
import { Link } from "react-router-dom";

// JSON data starts

let dishes = [
  {
    id: 1,
    name: "Chicken Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 2,
    name: "Ham Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 3,
    name: "Cheese Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 4,
    name: "Fries",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 5,
    name: "Egg Muffin",
    restaurant: "Mc Donalds",
    availableMeals: ["breakfast"],
  },
  {
    id: 6,
    name: "Burrito",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 7,
    name: "Tacos",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 8,
    name: "Quesadilla",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 9,
    name: "Steak",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 10,
    name: "Yakitori",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 11,
    name: "Nankotsu",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 12,
    name: "Piman",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 13,
    name: "Vegan Bento",
    restaurant: "Vege Deli",
    availableMeals: ["lunch"],
  },
  {
    id: 14,
    name: "Coleslaw Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 15,
    name: "Grilled Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 16,
    name: "Veg. Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 17,
    name: "Fruit Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 18,
    name: "Corn Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 19,
    name: "Tomato Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 20,
    name: "Minestrone Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 21,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 22,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 23,
    name: "Hawaiian Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 24,
    name: "Seafood Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 25,
    name: "Deep Dish Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["dinner"],
  },
  {
    id: 26,
    name: "Chow Mein",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 27,
    name: "Mapo Tofu",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 28,
    name: "Kung Pao",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 29,
    name: "Wontons",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 30,
    name: "Garlic Bread",
    restaurant: "Olive Garden",
    availableMeals: ["breakfast", "lunch", "dinner"],
  },
  {
    id: 31,
    name: "Ravioli",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 32,
    name: "Rigatoni Spaghetti",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 33,
    name: "Fettucine Pasta",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
];

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
  const filterDrop = dishes.filter(function (index) {
    return index.availableMeals.map((data) => {
      if (data == local.meal_type) {
        console.log(index.restaurant, "qqqq");
        res.push(index.restaurant);
      }
    });
  });
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
          {/* <div className="navbar">
            <div className="step1"> <Link to="/">Step1</Link> </div>
            <div className="step2 current"><Link to="/MealStepTwo">Step2</Link></div>
            <div className="step3"><Link to="/MealStepTree">Step3</Link></div>
            <div className="review"><Link to="/ReviewPage">Review</Link></div>
          </div> */}
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
