import { Link } from "react-router";
import heroThree from "../assets/hero-three.jpg";
import "../css/About.css";

const About = () => {
  return (
    <>
      <div className="about-container app">
        <div className="about-image-container">
          <img src={heroThree} alt="Healthy food" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">
            We provide healthy food for your family.
          </h2>
          <p className="about-paragraph">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city&lsquo;s rich culinary culture, we aim
            to honor our local roots while infusing a global palate.
          </p>
          <p className="about-paragraph">
            At our place, we believe that dining is not just about food but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <Link
            to="/about"
            onClick={() => scrollTo(0, 0)}
            className="about-button"
          >
            More About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
