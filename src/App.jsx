
import React, { useState } from "react";
import axios from "axios";
import RecipeList from "./assets/components/RecipeList";
import "./assets/components/RecipeList.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [foodName, setFoodName] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!foodName) {
      setAlert("Enter a food name to search");
      return;
    }

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
      );
      if (response.data.meals) {
        setRecipes(response.data.meals);
        setAlert("");
       
      } else {
        setRecipes([]);
        setAlert("No food found");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Meals DB</h1>
      <div className="header">
        <form onSubmit={handleSearch}>
          <input
            id="foodName"
            type="text"
            placeholder="Enter a food name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <button id="submit" type="submit">
            Search
          </button>
        </form>
      </div>
      {alert && <div className="alert alert-danger">{alert}</div>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
