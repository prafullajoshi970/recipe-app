import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import "./Style/Detail.css";

const RecipeDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=f0731ddc12b9414bafa8ca1d6f43a32a`
    )
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(data);

  console.log(id);
  const setItem = () => {
    localStorage.setItem("recipe", JSON.stringify(data));

    alert("item added succefully to favorite page");
  };

  return (
    <div>
      <NavBar></NavBar>
      {data.status === "failure" ? (
        <h2>
          😔 Sorry for in convinience Recepi is not available search another
          one...
        </h2>
      ) : (
        <div className="detailcard">
          <h1>{data.title}</h1>
          <img src={data.image} alt="" className="detailimg"></img>
          <div className="timetomake">
            <p>Ready in {data.readyInMinutes} minutes</p>
            <p>Servings: {data.servings}</p>
          </div>

          <div className="innercard">
            <h2>Instructions:</h2>
            <div> {data.instructions} </div>

            <div>
              {!data.analyzedInstructions ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <h2>Steps:</h2>
                  <ol>
                    {data.analyzedInstructions[0].steps.map((step) => (
                      <li key={step.number}>{step.step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
            <button onClick={setItem} className="btn1">
              Add to Faorite
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
