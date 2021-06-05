import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeList from "./RecipeList";

function SearchBar() {
  const [inputVal, setInputVal] = useState("");
  const [recipes, setRecipes] = useState([]);

  var url = `https://api.edamam.com/search?q=${inputVal}&app_id=6be851e6&app_key=25d4fa617f16fd6247ac68cbe5981764&from=0&to=24`;

  async function fetchReciepe() {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReciepe();
  };
  return (
    <div>
      <form className="search_bar" onSubmit={handleSubmit}>
        <input
          className="input_search"
          type="text"
          placeholder="Enter Item (mango, egg, patato...)"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <input className="submit_btn" type="submit" />
      </form>
      <div className="recipe_grid">
        {recipes.map((recipe) => {
          return <RecipeList recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default SearchBar;
