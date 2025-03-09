import About from "../components/About";
import heroOne from "../assets/hero.jpg";
import aboutimg from "../assets/about-img.jpg";
import Title from "../components/Title";
import "../css/AboutContainer.css";

const AboutContainer = () => {
  return (
    <>
      <div className="header-section">
        <div className="header-content">
          <Title title="About Us" />
          <p className="header-description">
            Discover our passion for exceptional dining. Whether you have
            questions or simply want to learn more, we&rsquo;re here to connect
            and share our story with you!
          </p>
        </div>
        <About />
      </div>
      <div className="hero-container">
        <img src={heroOne} alt="Hero" className="hero-image" />
        <div className="overlay"></div>
        <div className="hero-text-container">
          <p className="hero-text">
            Experience the authentic flavors & <br /> timeless traditions we
            bring to your table.
          </p>
        </div>
      </div>
      <div className="main-content app">
        {/* Text Section */}
        <div className="text-content">
          <div className="text-content-inner">
            <h2 className="main-heading">
              A little information <br /> for our valuable guest
            </h2>
            <p className="main-paragraph">
              Dining with us is more than just a meal—it&#39;s an experience.
              Our dedicated team is passionate about creating memorable moments,
              ensuring every visit is warm, welcoming, and truly special.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <p>3</p>
              <p>Locations</p>
            </div>
            <div className="stat-box">
              <p>1995</p>
              <p>Founded</p>
            </div>
            <div className="stat-box">
              <p>65+</p>
              <p>Staff Members</p>
            </div>
            <div className="stat-box">
              <p>100%</p>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <div className="image-container">
            <img src={aboutimg} alt="Healthy food" className="about-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
