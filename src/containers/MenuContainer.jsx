import { useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import "../css/MenuContainer.css";

const MenuContainer = () => {
  const categories = menu_list;
  const [products] = useState(food_list);
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCategory = (category, index) => {
    if (category === "All") {
      setCategoryProducts(products);
    } else {
      const categorisedProducts = products.filter(
        (product) => product.category === category
      );
      setCategoryProducts(categorisedProducts);
    }
    setActiveIndex(index);
  };

  return (
    <>
      <div className="menu-container">
        <div className="menu-header-section">
          <Title title="Our Menu" />
          <p className="header-description">
            We consider all the drivers of change to give you the components you
            need to create something truly remarkable.
          </p>

          {/* Category Buttons */}
          <div className="category-buttons no-scrollbar">
            <button
              onClick={() => handleCategory("All", 0)}
              className={`category-button ${activeIndex === 0 ? "active" : ""}`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index + 1}
                onClick={() => handleCategory(category.menu_name, index + 1)}
                className={`category-button ${
                  activeIndex === index + 1 ? "active" : ""
                }`}
              >
                {category.menu_name}
              </button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {categoryProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuContainer;
