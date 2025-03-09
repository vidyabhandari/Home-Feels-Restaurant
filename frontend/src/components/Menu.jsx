import "../styles/Menu.css"; // Import the CSS file
import Title from "./Title";
import tea from "../assets/breakfast.svg";
import dish from "../assets/dish.svg";
import drink from "../assets/drink.svg";
import dessert from "../assets/desert.svg";
import MenuCard from "./MenuCard";

const Menu = () => {
  const category = [
    {
      img: tea,
      title: "Breakfast",
      description:
        "Start your day with a delightful range of fresh, healthy breakfasts, from classic options to modern twists that energize you for the day ahead.",
    },
    {
      img: dish,
      title: "Main Dishes",
      description:
        "Savor our flavorful main dishes crafted with the finest ingredients. From traditional favorites to contemporary creations, there's something for every taste.",
    },
    {
      img: drink,
      title: "Drinks",
      description:
        "Quench your thirst with our selection of refreshing beverages, including handcrafted juices, smoothies, and signature drinks to complement any meal.",
    },
    {
      img: dessert,
      title: "Desserts",
      description:
        "Indulge in our heavenly desserts, a perfect blend of sweetness and creativity. From decadent cakes to light pastries, every bite is a treat.",
    },
  ];

  return (
    <div className="menu-container app">
      <Title title="Browse Our Menu" />
      <div className="menu-grid">
        {category.map((categ, index) => (
          <MenuCard category={categ} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
