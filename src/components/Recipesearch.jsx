import React, { useEffect, useState} from "react";
import NavBar from "./NavBar";
import "./Style/recipesearch.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Recipesearch = () => {
  const [input, setInput] = useState("mango");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
 const [count,setCount]=useState(0)
  const [data, setData] = useState([]);
  console.log(typeof data);
  console.log(count);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput("");
  };
 
  useEffect(()=>{
    fetch(
      `https://api.spoonacular.com/food/products/search?query=${search}&apiKey=59f929ea77e442a6902f74e6a3a69ed0`
    )
      .then((resp) => resp.json())
      .then((data) => setData(data.products))
      .catch((err) => console.log(err));

  },[search])
  const setItem = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCount((prev)=>prev+1)
    localStorage.setItem('cartcount', JSON.stringify(count))
    localStorage.setItem('recipe', JSON.stringify(updatedCart));
  }
  const count1 = JSON.parse(localStorage.getItem("cartcount"));
 
 
  return (
    <div>
      <div className="recipesearchmain">
        <NavBar data={count1}></NavBar>
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
            <button type="submit" className="searchbtn" >
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
                    <Link to={`/Detail/${ele.id}`}  className="link">
                      Detail
                    </Link>
                  </button>
                 
                 <button className="detailbtn" onClick={()=>setItem(ele) }>Favorite</button>
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
