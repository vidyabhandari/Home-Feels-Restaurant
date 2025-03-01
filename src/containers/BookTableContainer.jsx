import Footer from "../components/Footer";
import Title from "../components/Title";
import map from "../assets/map.png";
import "../css/BookTableContainer.css";

const BookTableContainer = () => {
  return (
    <div className="book-table-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="header-content">
          <Title title="Book a Table" />
          <p className="header-description">
            Reserve your spot and enjoy an unforgettable dining experience. We
            look forward to serving you with exceptional food and hospitality.
          </p>
        </div>
      </div>
      {/* Form and Contact Info Section */}
      <div className="map-container">
        <img src={map} alt="" className="map-image" />
      </div>
      <div className="form-overlay">
        {/* Form Section */}
        <form className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date <span className="required">*</span>
              </label>
              <input type="date" id="date" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label">
                Time <span className="required">*</span>
              </label>
              <input type="time" placeholder="Time" className="form-input" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Name <span className="required">*</span>
              </label>
              <input type="text" placeholder="Name" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">
                Phone No. <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Phone No."
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="persons" className="form-label">
              Total Persons <span className="required">*</span>
            </label>
            <select id="persons" className="form-select" required>
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
              Book a Table
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookTableContainer;
