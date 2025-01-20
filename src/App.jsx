import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router";
import AboutUsPage from "./Pages/AboutUsPage";
import BlogPage from "./Pages/BlogPage";
import MenuPage from "./Pages/MenuPage";
import ContactPage from "./Pages/ContactPage";
import ReservationPage from "./Pages/ReservationPage";

function App() {
  return (
    <>
      <div className="px-3 sm:px-[5vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about-us"} element={<AboutUsPage />} />
          <Route path={"/blog"} element={<BlogPage />} />
          <Route path={"/menu"} element={<MenuPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/reservation"} element={<ReservationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
