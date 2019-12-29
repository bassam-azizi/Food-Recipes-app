import React from "react";
import style from "./recipes.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipes}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.ingredient}>
        <p>
          <strong>Calories</strong> : {calories}
        </p>
        <ol className={style.list}>
          {ingredients.map(ingredient => (
            <li key={ingredient.name}>{ingredient.text}</li>
          ))}
        </ol>
      </div>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipes;
