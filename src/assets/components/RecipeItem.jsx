import React from 'react';
import './RecipeList.css';
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
const RecipeItem = ({recipe}) => {
    return (
      <div  id="body" className="col-sm-3 mb-4 ">
        <div  className="row">
          <Card style={{ width: "14rem",margin:"10px" }}>
            <Card.Img
              variant="top"
              src={recipe.strMealThumb}
              className="card-img-top"
              alt={recipe.strMeal}
            />
            <Card.Body>
              <Card.Title>{recipe.strMeal}</Card.Title>
              {/* <p className="card-text">{recipe.strInstructions}</p> */}
              <a
                href={recipe.strYoutube}
               
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="watch">Watch Video</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};

export default RecipeItem;