import React from 'react';
import RecipeItem from "./RecipeItem";

const RecipeList = ({recipes}) => {
    return (
      <div className='row'>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    );
};

export default RecipeList;