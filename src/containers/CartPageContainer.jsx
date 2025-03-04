import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import "../css/CartPageContainer.css";

const CartPageContainer = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0; // Ensure it's at least 0
          const totalPrice = item.price ? item.price * quantity : 0; // Prevent NaN

          return quantity > 0 ? ( // Only render if quantity > 0
            <>
              <div key={item._id} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{quantity}</p>
                <p>₹{totalPrice.toFixed(2)}</p>{" "}
                {/* Ensures valid number format */}
                <button
                  className="remove"
                  onClick={() => removeFromCart(item._id)}
                >
                  X
                </button>
              </div>
              <hr />
            </>
          ) : null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtoal</p>
              <p>{getTotalCartAmount()}</p>
              <hr />
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
              <hr />
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}</b>
              <hr />
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageContainer;
