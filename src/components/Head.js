import { useState } from "react";
import FoodFireLogo from "../Images/FoodFireLogo.png";
import { Link, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";

const Header = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
    <div className="head">
      <div className="logo">
        <img width="100px" src={FoodFireLogo}></img>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
          <li>
          {login == true ? (
            <button
              className="login-btn"
              onClick={() => {
                setLogin(false);
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setLogin(true);
              }}
              className="login-btn"
            >
              Signin
            </button>
          )} </li>

          
        </ul>
      </div>
    </div>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default Header;
