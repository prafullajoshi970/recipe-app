import React from "react";
import NavBar from "./NavBar";
import "./Style/favorite.css";

const FavoriteRecipe = () => {
  const storedUser = JSON.parse(localStorage.getItem("recipe"));
  console.log(storedUser);
  const count1 = JSON.parse(localStorage.getItem("cartcount"));

  return (
    <div>
      <NavBar data={count1}></NavBar>

      <h1 className="fhead">favorite recipes</h1>
      <div className="favoritecard">
  {storedUser.map((user, index) => (
    <div key={index} className="fitem">
      <h1>{user.title}</h1>
      <img src={user.image} alt="" className="fimage"></img>
      <hr></hr>
      
    </div>
  ))}
</div>


    </div>
  );
};

export default FavoriteRecipe;
