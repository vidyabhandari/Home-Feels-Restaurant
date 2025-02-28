import { useContext, useState } from "react";
import "../css/ProductCard.css"; // Import the CSS file
import add from "../assets/add.png";
import remove from "../assets/remove.png";
import { StoreContext } from "../context/StoreContext";

const ProductCard = ({ product, onAddToCart }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...product,
        quantity: quantity
      });
    }
  };
  return (
    <div className="product-card">
      {/* Image Section */}
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-details">
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
        
        {/* Cart Controls */}
        <div className="cart-controls">
          <div className="quantity-controls">
            <button 
              className="quantity-btn" 
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button 
              className="quantity-btn" 
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
