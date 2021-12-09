import React, { useState, useEffect } from "react";
import "../Meal.css";
import { Link } from "react-router-dom";

// JSON data

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
var dish = "";
var arr = [];
function MealStepTree() {

  const [newval, setnewval] = useState([]);
  const [index, setindex] = useState();
  const [allval, setallval] = useState([]);
  const [quantity, setquantity] = useState([]);
  const [formData, setFormData] = useState({
    meal_type: "",
    NOP: "",
    restro: "",
    dishes: [],
    NOD: [],
  });
  // const dish = { name: "", qty: "" };
  const [vall, setvall] = useState(["1"]);

  const local = JSON.parse(localStorage.getItem("list "));
  // console.log(local);
  
  function getListFoodByRestaurant() {
    var result = [];
    dishes.map((value) => {
      if (value.restaurant === local.restro) {
        result.push(value);
      }
      return true
    });

    return result;
  }

  var result = [];

  useEffect(() => {
    setallval((pre) => [...pre, result]);
   
  },[]);

  function getListFood() {
    getListFoodByRestaurant().map((value) => {
      var index = value.availableMeals.indexOf(local.meal_type);
      if (index !== -1) {
        result.push(value.name);
      }
      return true
    });
    console.log(result);
  }
  getListFood();

  const submitfun = () => {
    localStorage.setItem(
      "list ",
      JSON.stringify({ ...local, NOD: formData.NOD, dishes: formData.dishes })
    );
  };

  // useEffect(() => {
  //   vall.map((w) => {});
  // }, [vall]);

  const addField = () => {
    setvall((pre) => [...pre, "1"]);
    let vallsy = allval;
    console.log(newval);

    var array3 = result.filter(function (obj) {
      return newval.indexOf(obj) === -1;
    });
    console.log(array3);

    vallsy[index + 1] = array3;

    setallval(vallsy);
  };

  const selectfunc = (e, i) => {
    const valarr = newval;

    valarr[i] = e.target.value;
    console.log(valarr);
    setnewval(valarr);
    setindex(i);
  };

  const setquantityfun = (data, i) => {
    const putquant = quantity;

    putquant[i] = data;
    setquantity(putquant);
  };

  const valllll = () => {
    return vall.map((w, i) => {
      return (
        <>
          <div id="extra_selection" className="select_dish col-sm-7">
            <p>Please select a Dish</p>

            <select
              id="formSelectDish"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                dish = e.target.value;

                //setnewval(pre=>[...pre,e.target.value]);
                selectfunc(e, i);
                
              }}
            >
              <option value="">Select</option>
              {allval[i]?.map((data) => {
                return <option value={data}>{data}</option>;
              })}
            </select>
          </div>
          <div id="extra" className="serving_number col-sm-5">
            <p>Please Enter no. of servings</p>

            <input
              id="serving_no"
              type="number"
              name="serving"
              onChange={(e) => {
                dish = e.target.value;
                //setFormData({ ...formData, NOD: e.target.value });
                setquantityfun(dish, i);
              }}
              min={1}
              max={10}
            />
          </div>
        </>
      );
    });
  };

  return (
    <>
      {/* <!-- step three start--> */}
      <div id="wrapper">
        <div className="phase_three">
          <div className="navbar">
            <div className="step3 current">
              <Link to="/MealStepTree">Step3</Link>
            </div>
          </div>

          <div id="select_complete_dish">
            {valllll()}

            <div className="more_item">
              <button
                onClick={() => {
                  addField();
                  console.log(arr);
                }}
                id="add"
              >
                Add
              </button>
            </div>
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
              onClick={() => {
                formData.dishes = newval;
                formData.NOD = quantity;
                setFormData({
                  ...formData,
                  NOD: formData.NOD,
                  dishes: formData.dishes,
                });

                submitfun();
              }}
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
