import React, { useState } from "react";

const MealPlanner = () => {
  const [meals, setMeals] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [calories, setCalories] = useState("");
  const [calorieResult, setCalorieResult] = useState("");

  const addMeal = () => {
    const day = document.getElementById("day").value;
    const meal = document.getElementById("meal").value;
    setMeals([...meals, { day, meal }]);
  };

  const calculateCalories = () => {
    if (!calories || isNaN(calories) || calories <= 0) {
      setCalorieResult("Please enter a valid calorie count.");
    } else {
      const perMeal = (calories / 3).toFixed(2);
      setCalorieResult(`Distribute ~${perMeal} kcal per meal for balance.`);
    }
  };

  const addGrocery = () => {
    const item = document.getElementById("grocery").value;
    if (item) {
      setGroceryList([...groceryList, item]);
    }
  };

  return (
    <div className="container">
      <h2>Meal Planner</h2>

      <div className="tools">
        {/* Add Meal Section */}
        <div className="glass-card">
          <h3>Add Meal</h3>
          <label>Select Day:</label>
          <select id="day">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (day) => (
                <option key={day} value={day.toLowerCase()}>
                  {day}
                </option>
              )
            )}
          </select>
          <label>Select Meal:</label>
          <select id="meal">
            {["Breakfast", "Lunch", "Dinner"].map((meal) => (
              <option key={meal} value={meal.toLowerCase()}>
                {meal}
              </option>
            ))}
          </select>
          <button onClick={addMeal}>Add Meal</button>
        </div>

        {/* Calorie Calculator */}
        <div className="glass-card">
          <h3>Calorie Calculator</h3>
          <input
            type="number"
            placeholder="Enter Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <button onClick={calculateCalories}>Calculate</button>
          <p>{calorieResult}</p>
        </div>

        {/* Grocery List */}
        <div className="glass-card">
          <h3>Grocery List</h3>
          <input type="text" id="grocery" placeholder="Enter Grocery Item" />
          <button onClick={addGrocery}>Add Item</button>
          <ul>
            {groceryList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Meal Plan List */}
      <h3>Meal Plan</h3>
      <ul>
        {meals.map((meal, index) => (
          <li key={index} className="animated-item">
            {meal.day} - {meal.meal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlanner;
