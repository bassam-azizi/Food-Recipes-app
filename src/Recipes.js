import React from "react";
import style from "./recipes.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipes}>
      <h1 className={style.title}>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <p>
        <strong>Calories</strong> : {calories}
      </p>
      <div className={style.ingredient}>
        <ol className={style.list}>
          {ingredients.map(ingredient => (
            <li key={ingredient.name}>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipes;
