import { useContext, useState } from "react";
import Title from "../components/Title";
import "../css/MenuContainer.css";
import { StoreContext } from "../context/StoreContext";
import FoodList from "../components/FoodList";

const MenuContainer = () => {
  const { menu_list } = useContext(StoreContext);
  const [category, setCategory] = useState("All");

  return (
    <>
      <div className="menu-container app">
        <div className="menu-header-section">
          <Title title="Our Menu" />
          <p className="header-description">
            We consider all the drivers of change to give you the components you
            need to create something truly remarkable.
          </p>

          {/* Category Buttons */}
          <div className="explore-menu-list">
            {menu_list.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    )
                  }
                  key={index}
                  className="explore-menu-list-item"
                >
                  <img
                    src={item.menu_image}
                    className={category === item.menu_name ? "active" : ""}
                    alt=""
                  />
                  <p>{item.menu_name}</p>
                </div>
              );
            })}
          </div>

          <FoodList category={category}/>
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
