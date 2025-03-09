import React from "react";
import { NavLink } from "react-router-dom";
import add from "../../assets/add.png";
import clipboard from "../../assets/clipboard.png";
import order from "../../assets/order.png";
import "../../css/AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={add} alt="AddItem" className="add-item" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={clipboard} alt="ListItems" className="list-items" />
          <p>List Items</p>
        </NavLink>

        <NavLink to="/orders" className="sidebar-option">
          <img src={order} alt="Order" className="order" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
