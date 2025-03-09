import React from "react";
import "./Navbar.css";
import admin from "../../assets/admin.png";
import logo from "../../assets/restaurant.png";

const Navbar = () => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.href = "https://home-feels-restaurant-mu.vercel.app"; // Fixed URL
    }
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img
        className="profile"
        src={admin}
        onClick={handleLogout}
        alt=""
      />
    </div>
  );
};

export default Navbar;
