import React from "react";
import restaurant from "../../assets/restaurant.png";
import admin from "../../assets/admin.png";
import "../../css/AdminNavbar.css"
const AdminNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img
          src={restaurant}
          alt="restaurantLogo"
          className="restaurant-logo"
        />
        <span className="restuarnat-name">HomeFeels</span>
      </div>
      <div className="admin-section">
        <img src={admin} alt="adminProfile" className="admin-profile" />
        <span className="admin-text">Admin</span>
      </div>
    </div>
  );
};

export default AdminNavbar;
