import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import map from "../assets/map.png";
import "../css/BookTableContainer.css";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom"; // // corrected import

const BookTableContainer = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    persons: "",
  });

  const [availableTables, setAvailableTables] = useState([]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token } = useContext(StoreContext);
  const navigate = useNavigate(); //  Fixed navigation

  useEffect(() => {
    if (!token) {
      alert("Sign in first to book the table");
      navigate("/login"); // Corrected navigation usage
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.date || !formData.time || !formData.persons) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:4000/api/tables", {
        params: {
          date: formData.date,
          time: formData.time,
          people: formData.persons,
        },
      });

      if (response.data.success && response.data.tables.length > 0) {
        setAvailableTables(response.data.tables);
        setShowPopup(true);
      } else {
        setError("No tables available for the selected time."); // ✅ Improved error handling
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  const handlePayment = async () => {
    if (!selectedTable) return alert("Please select a table first!");

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "http://localhost:4000/api/bookings/book-table",
        {
          date: formData.date,
          time: formData.time,
          people: formData.persons,
          tableId: selectedTable,
        },
        { headers: { token } }
      );
      if (!response.data.success) {
        setError(response.data.message || "Booking failed. Try again.");
        return;
      }

      const { order, key_id, bookingId } = response.data;

      const options = {
        key: key_id,
        amount: order.amount,
        currency: "INR",
        name: "Table Booking",
        description: `Booking for ${formData.persons} people`,
        order_id: order.id,
        handler: async function (paymentResponse) {
          try {
            const verifyResponse = await axios.post(
              "http://localhost:4000/api/bookings/verify-payment",
              {
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                bookingId,
              }
            );

            if (verifyResponse.data.success) {
              alert("Payment Successful! Booking Confirmed.");
              navigate("/users-table");
            } else {
              alert("Payment Verification Failed!"); //Improved error handling
            }
          } catch (error) {
            console.error("Payment Verification Error:", error);
            alert("Error verifying payment!");
          }
        },
        prefill: {
          name: formData.name,
          contact: formData.phone,
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      alert("Payment failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-table-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="table-header-content">
          <Title title="Book a Table" />
          <p className="header-description">
            Reserve your spot and enjoy an unforgettable dining experience. We
            look forward to serving you with exceptional food and hospitality.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <img src={map} alt="Map" className="map-image" />
      </div>

      {/* Form Section */}
      <div className="form-overlay">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date <span className="required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-input"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Time <span className="required">*</span>
              </label>
              <input
                type="time"
                name="time"
                className="form-input"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Phone No. <span className="required">*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                className="form-input"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="persons" className="form-label">
              Total Persons <span className="required">*</span>
            </label>
            <select
              id="persons"
              name="persons"
              className="form-select"
              required
              value={formData.persons}
              onChange={handleChange}
            >
              <option value="">Select number of persons</option>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? "Person" : "Persons"}
                </option>
              ))}
            </select>
          </div>
          <div className="btn-container">
            <button type="submit" className="submit-button">
              Check Availability
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Popup Modal for Available Tables */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Available Tables</h3>
            {availableTables.length > 0 ? (
              <>
                <ul>
                  {availableTables.map((table) => (
                    <li key={table._id} className="table-item">
                      Table {table.number} (Seats: {table.seats})
                      <button
                        onClick={() => setSelectedTable(table._id)}
                        className={`btn-select ${
                          selectedTable === table._id ? "selected" : ""
                        }`}
                      >
                        {selectedTable === table._id ? "Selected" : "Select"}
                      </button>
                    </li>
                  ))}
                </ul>
                {selectedTable && (
                  <button
                    onClick={handlePayment}
                    className="btn-confirm"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Confirm & Pay"}
                  </button>
                )}
              </>
            ) : (
              <p>No tables available.</p>
            )}
            <button onClick={() => setShowPopup(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTableContainer;
