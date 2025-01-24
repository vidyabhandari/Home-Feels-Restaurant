import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";

const BlogPage = () => {
  return (
    <div>
      <div className="flex text-center justify-center">
        <h1 className="text-[50px] font-semibold font-[Playfair-Display]">
          Blog Page
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center pt-3 lg:rounded-2xl gap-7">
        <div className="flex flex-col h-[400px]">
          <div className="h-72 overflow-hidden rounded-2xl">
            <img src={blog1} alt="" className="object-cover h-full w-full" />
          </div>
          <div>
            <p className="text-[#E27D60]">Feb 29, 2024</p>
          </div>
          <div>
            <p>
              The History of Fine Dining: From Ancient Feasts to Modern
              Gastronomy
            </p>
          </div>
        </div>

        <div className="flex flex-col h-[400px]">
          <div className="h-72 overflow-hidden rounded-2xl">
            <img src={blog2} alt="" className="object-cover h-full w-full" />
          </div>
          <div>
            <p className="text-[#E27D60]">Feb 29, 2024</p>
          </div>
          <div>
            <p>
              Exploring Culinary Delights: A Journey Through Mediterranean
              Cuisine
            </p>
          </div>
        </div>

        <div className="flex flex-col h-[400px]">
          <div className="h-72 overflow-hidden rounded-2xl">
            <img src={blog3} alt="" className="object-cover h-full w-full" />
          </div>
          <div>
            <p className="text-[#E27D60]">Feb 29, 2024</p>
          </div>
          <div>
            <p>
              The Art of Pairing: Elevating Your Dining Experience with Wine &
              Cuisine
            </p>
          </div>
        </div>

        <div className="flex flex-col h-[400px]">
          <div className="h-72 overflow-hidden rounded-2xl">
            <img src={blog4} alt="" className="object-cover" />
          </div>
          <div>
            <p className="text-[#E27D60]">Feb 29, 2024</p>
          </div>
          <div>
            <p>The Story Behind Our Signature Dish: Chef Marco's Pasta</p>
          </div>
        </div>

        <div className="flex flex-col h-[400px]">
          <div className="h-72 overflow-hidden rounded-2xl">
            <img src={blog5} alt="" className="object-cover h-full w-full" />
          </div>
          <div>
            <p className="text-[#E27D60]">Feb 29, 2024</p>
          </div>
          <div>
            <p>5 Reasons Why Brunch is the Best Meal of the Day</p>
          </div>
        </div>

        <div className="flex flex-col h-[400px]">
          <div className="h-72 overflow-hidden rounded-2xl">
            <img src={blog6} alt="" className="object-cover h-full w-full" />
          </div>
          <div>
            <p className="text-[#E27D60]">Feb 29, 2024</p>
          </div>
          <div>
            <p>Sustainable Dining: Eatery's Commitment to the Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
