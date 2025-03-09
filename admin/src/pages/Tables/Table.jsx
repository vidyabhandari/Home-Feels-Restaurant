import axios from "axios";
import { useEffect, useState } from "react";
import { assets, url } from "../../assets/assets";
import tabloLogo from "../../assets/table.png";
import "./table.css";

const Table = () => {
  const [bookedTables, setBookedTables] = useState([]);

  const fetchAllBookedTables = async () => {
    try {
      const response = await axios.get(`${url}/api/bookings/list`);
      if (response.data.success) {
        setBookedTables(response.data.data.reverse());
      } else {
        alert("Error fetching table bookings");
      }
    } catch (error) {
      alert("Failed to fetch table bookings");
    }
  };

  const statusHandler = async (event, bookingId) => {
    try {
      const response = await axios.post(`${url}/api/bookings/update-status`, {
        bookingId,
        status: event.target.value,
      });

      if (response.data.success) {
        await fetchAllBookedTables();
      } else {
        alert("Failed to update table status");
      }
    } catch (error) {
      alert("Error updating table status");
    }
  };

  useEffect(() => {
    fetchAllBookedTables();
  }, []);

  return (
    <div className="booking-wrapper">
      <h3 className="booking-header">Table Reservations</h3>
      <div className="booking-grid">
        {bookedTables.map((booking, index) => (
          <div key={index} className="booking-card">
            <div className="booking-top">
              <img
                src={tabloLogo}
                alt="Table Icon"
                className="booking-icon"
              />
              <div>
                <p className="booking-id">ID: {booking.tableId}</p>
                <p className="booking-status">{booking.status}</p>
              </div>
            </div>

            <div className="booking-info">
              <p>
                <strong>Seats:</strong> {booking.people}
              </p>
              <p>
                <strong>Date & Time:</strong> {booking.date} | {booking.time}
              </p>
              <p>
                <strong>Payment:</strong>{" "}
                {booking.payment ? "Paid" : "Pending"}
              </p>
              <p>
                <strong>Gateway:</strong> {booking.paymentGateway}
              </p>
            </div>

            <div className="booking-actions">
              <select
                onChange={(e) => statusHandler(e, booking._id)}
                value={booking.status}
                className="status-selector"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
