import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router";
import "../css/PlaceOrder.css";

const PlaceOrderContainer = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems } =
    useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        orderItems.push({ ...item, quantity: cartItems[item._id] });
      }
    });

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 50, //  Ensure this is in rupees
      userId: "USER_ID_HERE", // Replace with actual user ID if applicable
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        const { order, key_id, amountInRupees } = response.data;

        const options = {
          key: key_id,
          amount: amountInRupees * 100, // Convert to paise
          currency: "INR",
          name: "Home Feels Restaurant",
          description: "Food Order Payment",
          order_id: order.id,
          prefill: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            contact: data.phone,
          },
          handler: function (response) {
            handlePaymentSuccess(response, order._id);
          },
          theme: { color: "#ff4757" },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();

        razorpay.on("payment.failed", function (response) {
          alert("Payment failed. Please try again.");
          console.log(response.error);
        });
      } else {
        a("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handlePaymentSuccess = async (paymentResponse, orderId) => {
    try {
      const verifyResponse = await axios.post(
        url + "/api/order/verify",
        {
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature,
          orderId,
        },
        { headers: { token } }
      );

      if (verifyResponse.data.success) {
        alert("Payment successful!");
        setCartItems({});
        navigate("/myorders");
      } else {
        alert("Payment verification failed");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      alert("Payment verification failed");
    }
  };

  useEffect(() => {
    if (!token) {
      alert("Sign in first to place an order");
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <div className="app">
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-field">
            <input
              type="text"
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              placeholder="First name"
              required
            />
            <input
              type="text"
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              placeholder="Last name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email address"
            required
          />
          <input
            type="text"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Street"
            required
          />
          <div className="multi-field">
            <input
              type="text"
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              placeholder="City"
              required
            />
            <input
              type="text"
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              placeholder="State"
              required
            />
          </div>
          <div className="multi-field">
            <input
              type="text"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              placeholder="Zip code"
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Phone"
            required
          />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                </b>
              </div>
            </div>
          </div>
          <button className="place-order-submit" type="submit">
            Proceed To Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrderContainer;
