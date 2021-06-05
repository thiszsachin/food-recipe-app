import React from "react";
import "./App.css";

function RecipeList({ recipe }) {
  return (
    <div className="img_title">
      <img
        onClick={() => {
          window.open(recipe["recipe"]["url"]);
        }}
        className="recipe_image"
        src={recipe["recipe"]["image"]}
        alt="recipe-food"
      />
      <p className="recipe_title">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeList;
