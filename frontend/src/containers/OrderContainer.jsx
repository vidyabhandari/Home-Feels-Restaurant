import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/assets";
import "../css/Order.css";

const OrderContainer = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="app">
      <div className="my-orders">
        <h2>My Orders</h2>
        <div className="container">
          {data.map((order, index) => {
            return (
              <div key={index} className="my-orders-order">
                <div className="food-name">
                  <img src={assets.parcel_icon} alt="" />
                  <p>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + ", ";
                      }
                    })}
                  </p>
                </div>
                <p>₹{order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p>
                  <span>&#x25cf;</span> <b>{order.status}</b>
                </p>
                <button onClick={fetchOrders}>Trak Order</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
