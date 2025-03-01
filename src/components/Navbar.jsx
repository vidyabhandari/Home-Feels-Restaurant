import { Link, NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import menu_icon from "../assets/menu_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import logo from "../assets/restaurant.png";
import { assets } from "../assets/assets";
import "../css/Navbar.css";
import cartIcon from "../assets/cart.png";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleNavbar = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("token"));
    setToken(loginToken);
  }, []);

  return (
    <>
      <div className="navbar-main">
        <div className="navbar-logo-container">
          <NavLink to="/">
            <div className="logo-wrapper">
              <img src={logo} alt="" className="logo-image" />
              <div className="logo-text-container">
                <p className="logo-text">HOME FEELS</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="desktop-nav-links">
          <NavLink to="/">
            <p>Home</p>
            <hr className="nav-underline nav-underline-hidden" />
          </NavLink>
          <NavLink to="/about">
            <p>About</p>
            <hr className="nav-underline nav-underline-hidden" />
          </NavLink>
          <NavLink to="/menu">
            <p>Menu</p>
            <hr className="nav-underline nav-underline-hidden" />
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
            <hr className="nav-underline nav-underline-hidden" />
          </NavLink>
        </div>

        <div className="auth-container">
          {token ? (
            <div className="profile-dropdown">
              <img
                onClick={() => navigate("/cart")}
                src={cartIcon}
                className="cart-icon"
              />
              <img
                onClick={() => navigate("/profile")}
                src={assets.profile_icon}
                alt="Profile"
                className="profile-icon"
              />
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <Link to="/profile" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link to="/orders" className="dropdown-item">
                    Orders
                  </Link>
                  <p
                    className="dropdown-item logout-button"
                    onClick={() => setToken("")}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/signup" className="signup-button">
                Signup
              </Link>
            </div>
          )}

          <div className="mobile-menu-trigger">
            <img
              src={menu_icon}
              alt=""
              className="hamburger-icon"
              onClick={handleNavbar}
            />
          </div>
        </div>
      </div>
      <div>
        {navActive && (
          <div className="mobile-menu">
            <div className="mobile-menu-header" onClick={handleNavbar}>
              <img src={dropdown_icon} alt="Close" className="back-icon" />
              <p className="back-text">Back</p>
            </div>
            <div className="mobile-nav-links">
              <NavLink
                to="/"
                onClick={() => setNavActive(false)}
                className="mobile-nav-item"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setNavActive(false)}
                className="mobile-nav-item"
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                onClick={() => setNavActive(false)}
                className="mobile-nav-item"
              >
                Menu
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setNavActive(false)}
                className="mobile-nav-item"
              >
                Contact
              </NavLink>
              {!token && (
                <div className="mobile-auth-buttons">
                  <Link
                    to="/login"
                    className="mobile-login-button"
                    onClick={() => setNavActive(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="mobile-signup-button"
                    onClick={() => setNavActive(false)}
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
