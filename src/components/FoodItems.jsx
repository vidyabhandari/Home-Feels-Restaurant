import React from "react";
import { food_list } from "../assets/assets";

const FoodItems = ({ foodItem }) => {
  console.log(foodItem);
  return (
    <div>
      <div className="rounded-lg overflow-hidden">
        <img
          src={foodItem.image}
          alt=""
          className=" object-contain rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:translate-y-[-10px] hover:shadow-2xl"
        />
      </div>
      <div className="flex justify-between font-[PlayFair-Display] text-[20px] ">
        <h3>{foodItem.name}</h3>
        <h3>
          {"₹"}
          {foodItem.price}
        </h3>
      </div>
    </div>
  );
};

export default FoodItems;
