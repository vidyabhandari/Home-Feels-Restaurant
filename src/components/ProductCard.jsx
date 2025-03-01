import { useContext } from "react";
import "../css/ProductCard.css"; // Import the CSS file
import add from "../assets/add.png";
import remove from "../assets/remove.png";
import { StoreContext } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={product.image} alt="" />
        {!cartItems?.[product.id] ? (
          <img
            className="add"
            onClick={() => addToCart(product.id)}
            src={add}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(product.id)}
              src={remove}
              alt=""
            />
            <p>{cartItems[product.id]}</p>
            <img onClick={() => addToCart(product.id)} src={add} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{product.name}</p>
        </div>
        <p className="food-item-description">{product.description}</p>
        <p className="food-item-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
