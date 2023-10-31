import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./Style/recipesearch.css";
import TextField from "@mui/material/TextField";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const Recipesearch = () => {
  const [input, setInput] = useState("mango");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(NaN);
  console.log(search);
  const [data, setData] = useState([]);
  console.log(typeof data);
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput("");
  };
  console.log(count);
  const fetchapi = () => {
    fetch(
      `https://api.spoonacular.com/food/products/search?query=${search}&apiKey=f0731ddc12b9414bafa8ca1d6f43a32a`
    )
      .then((resp) => resp.json())
      .then((data) => setData(data.products))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchapi();
  });
  return (
    <div>
      <div className="recipesearchmain">
        <NavBar></NavBar>
        <div className="recipehead">
          <h1>
            "Where Tase Meets Technology - Find Cook, and Share the Goodness
          </h1>
          <p>
            Cooking is the process of cooking food through various techniques to
            make it safe to eat , visually appealing and enjoyable in term of
            flavour and texture.
          </p>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="searchtext"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="searchbtn" onClick={fetchapi}>
              Search
            </button>
          </form>
        </div>
      </div>
      {!data ? (
        <div>
          <h1>Enter text in searchbox and click </h1>
        </div>
      ) : (
        <div className="allcards">
          {" "}
          {data.map((ele, idx) => {
            return (
              <div className="card" key={ele.id}>
                <div className="cardhead">{ele.title}</div>
                <div>
                  <img src={ele.image} alt="Loading..." className="cardimg" />
                </div>
                <div className="cardfooter">
                  <button className="detailbtn">
                    <Link to={`/Detail/${ele.id}`} className="link">
                      Detail
                    </Link>
                  </button>
                  {count ? (
                    <FavoriteIcon onClick={() => setCount(0)}></FavoriteIcon>
                  ) : (
                    <FavoriteBorderIcon
                      onClick={() => setCount(1)}
                    ></FavoriteBorderIcon>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Recipesearch;
