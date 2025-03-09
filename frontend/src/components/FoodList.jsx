import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductCard from "./ProductCard";

const FoodList = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display-list">
      {food_list.map((item) => {
        if (category === "All" || category === item.category) {
          return (
            <ProductCard
              key={item._id}
              image={item.image}
              name={item.name}
              desc={item.description}
              price={item.price}
              id={item._id}
            />
          );
        }
      })}
    </div>
  );
};

export default FoodList;
