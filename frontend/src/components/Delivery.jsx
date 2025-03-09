import aboutTwo from "../assets/about-two.jpg";
import aboutFive from "../assets/about-five.jpg";
import aboutSix from "../assets/about-six.jpg";
import leaf from "../assets/leaf.png";
import offers from "../assets/money-bags.png";
import star from "../assets/star.png";
import "../css/Delivery.css"; // Import the CSS file

const Delivery = () => {
  return (
    <div className="delivery-container app">
      {/* Image Section */}
      <div className="image-section">
        <div className="main-image-container">
          <img
            src={aboutTwo}
            alt="Healthy food"
            className="main-image"
          />
        </div>
        <div className="secondary-images-container">
          <div className="secondary-image-top">
            <img
              src={aboutFive}
              alt=""
              className="secondary-image"
            />
          </div>
          <div className="secondary-image-bottom">
            <img src={aboutSix} alt="" className="secondary-image" />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section">
        <div className="heading-container">
          <h2 className="heading">
            Finest Dining <br /> Experience in the City
          </h2>
          <p className="description">
            At Home Feels Restaurant, we bring you a warm and inviting
            atmosphere where every meal is a celebration. Our chefs craft
            exquisite dishes using the freshest ingredients, blending
            traditional flavors with a modern touch. Whether you&lsquo;re here
            for a casual meal or a special occasion, we promise an unforgettable
            dining experience.
          </p>
        </div>
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon-container">
              <img src={leaf} alt="" className="feature-icon" />
            </div>
            <p className="feature-text">
              Authentic & Fresh Ingredients
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon-container">
              <img src={offers} alt="" className="feature-icon" />
            </div>
            <p className="feature-text">
              Best Offers & Prices
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon-container">
              <img src={star} alt="" className="feature-icon" />
            </div>
            <p className="feature-text">
              Exceptional Service & Ambiance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;