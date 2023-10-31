import React from "react";
import NavBar from "./NavBar";
import "./Style/favorite.css";

const FavoriteRecipe = () => {
  const storedUser = JSON.parse(localStorage.getItem("recipe"));
  console.log(storedUser);

  return (
    <div>
      <NavBar></NavBar>

      <h1 className="fhead">favorite recipes</h1>
      <div className="favoritecard">
        <h1>{storedUser.title}</h1>
        <img src={storedUser.image} alt="" className="fimage"></img>
        <div className="fcard">
          <p>Ready in {storedUser.readyInMinutes} minutes</p>
          <p>Servings: {storedUser.servings}</p>

          <div>
            <h2>Instructions:</h2> {storedUser.instructions}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteRecipe;
