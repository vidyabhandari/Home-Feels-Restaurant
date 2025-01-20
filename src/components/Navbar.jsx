import React from "react";
import { NavLink } from "react-router";
import icon from "../assets/shop-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 items-center border-b-2 border-[#ccc] ">
      <div>
        <NavLink to="/" className="flex items-center gap-2">
          <img src={icon} alt="" />
          <p className="text-2xl uppercase font-[Inconsolata]">Home Feels!</p>
        </NavLink>
      </div>
      <div className="hidden md:flex gap-4 uppercase font-medium text-[#2A2A2A] text-base">
        <NavLink to="/about-us">
          <p>About</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
        <NavLink to="/menu">
          <p>Menu</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
        <NavLink to="/reservation">
          <p>Reservation</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
        <NavLink to="/blog">
          <p>Blog</p>
          <hr className="w-6/12 mx-auto h-[3px] bg-[#303030] hidden" />
        </NavLink>
      </div>
      <div>
        <button className="border-2 border-[#E27D60] px-6 py-2 rounded-md text-[#E27D60] text-lg font-semibold">
          Book Table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
