import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import table from "../assets/table.png";
import "../css/TableBookings.css"; // New CSS file for better design

const TableBookingContainer = () => {
  const [bookings, setBookings] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchBookings = async () => {
    try {
      const response = await axios.post(
        `${url}/api/bookings/user-bookings`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setBookings(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBookings();
    }
  }, [token]);

  return (
    <div className="app">
      <div className="table-booking-container">
        <h2 className="booking-title">My Table Bookings</h2>
        <div className="booking-list">
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div key={index} className="booking-item">
                <img src={table} alt="Table Icon" className="booking-icon" />

                <div className="booking-details">
                  <p>
                    <b>Seats:</b> {booking.people}
                  </p>
                  <p>
                    <b>Date:</b> {booking.date}
                  </p>
                  <p>
                    <b>Time:</b> {booking.time}
                  </p>
                </div>

                <span className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>
            ))
          ) : (
            <p className="no-bookings">No table bookings found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableBookingContainer;
