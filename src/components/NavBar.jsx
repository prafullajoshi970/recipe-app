import "./Style/Nav.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navmain">
      <div className="navlogo">
        <h1>Recipe App</h1>
      </div>
      <div className="navlinks">
        <Link to={"/"} className="navatag">
          Recipe
        </Link>
        <Link to={"/Favourite"} className="navatag">
          Favourite
        </Link>
        <Link href=" " className="navatag">
          contactUs
        </Link>
      </div>

      <div>
        {" "}
        <button className="navbtn">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
