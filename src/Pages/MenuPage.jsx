import React, { useEffect, useState } from "react";
import axios from "axios";

import { food_list } from "../assets/assets";
import FoodItems from "../components/FoodItems";

const MenuPage = () => {
  // const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  // const [meals, setMeals] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     setMeals(response.data.meals);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  console.log(food_list);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="text-[50px] font-semibold font-[Playfair-Display]">
          Our Menu
        </h1>
        <p className="text-[30px] font-[PlayFair-Display] flex-col  text-lg text-center">
          "Savor the moments, one dish at a time. Explore flavors crafted with
          passion and precision."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center pt-3 lg:rounded-2xl gap-y-4">
        {food_list.map((foodItem, index) => (
          <FoodItems foodItem={foodItem} key={index} />
        ))}
      </div>
    </>
  );
};

export default MenuPage;
