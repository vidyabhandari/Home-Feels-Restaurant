import { useContext, useState } from "react";
import "../css/Navbar.css";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import logo from "../assets/restaurant.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    alert("Logout Syccessfull");
  };

  return (
    <div className="navbar app">
      <Link to="/">
        <div className="logo-wrapper">
          <img src={logo} alt="" className="logo-image" />
          <div className="logo-text-container">
            <p className="logo-text">HOME FEELS</p>
          </div>
        </div>
      </Link>
      <ul className="navbar-menu">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to={"/menu"}>MENU</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </ul>
      <div className="navbar-right">
        {token ? (
          <>
            <Link to="/cart" className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
            </Link>

            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={() => navigate("/users-table")}>
                  <p>Booked Tables</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="login-btn">
            <button onClick={() => navigate("/login")}>Log In</button>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
