import React from "react";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";

const AboutUsPage = () => {
  return (
    <div>
      <div className="flex items-center py-6 flex-col justify-center ">
        <h1 className="text-[50px] font-semibold font-[Playfair-Display]">
          About us
        </h1>
        <p className="text-[30px] font-[PlayFair-Display] flex-col  text-lg text-center">
          Welcome to Eatery, where passion meets flavor. We're dedicated to
          serving handcrafted dishes with love.
          <br />
          Our story began with a desire to share warmth through food. Join us
          for an unforgettable culinary <br />
          experience.
        </p>
      </div>
      <div className="flex items-center h-96 w-full overflow-hidden gap-4 mb-3 rounded-2xl">
        <div className="w-3/4 rounded-2xl overflow-hidden h-full ">
          <img
            src={dish1}
            className="object-contain h-auto relative bottom-[550px]"
          />
        </div>
        <div className="w-2/4 overflow-hidden rounded-2xl h-full">
          <img
            src={dish2}
            className="object-contain h-auto relative bottom-[200px]"
          />
        </div>
      </div>
      <div className="flex items-center h-96 w-full overflow-hidden gap-4 mb-3 rounded-2xl">
        <div className="w-2/4 rounded-2xl overflow-hidden h-full">
          <img src={dish3} className="object-cover relative bottom-56 h-auto" />
        </div>
        <div className="w-3/4 overflow-hidden rounded-2xl h-full">
          <img
            src={dish4}
            className="object-cover h-auto relative bottom-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
