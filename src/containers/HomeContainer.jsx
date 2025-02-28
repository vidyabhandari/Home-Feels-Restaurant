import About from "../components/About";
import Blog from "../components/Blog";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <div className="light-section">
        <About />
      </div>
      <Reviews />
      <div className="light-section">
        <Delivery />
      </div>
      <Blog />
      <Footer />
    </>
  );
};

export default HomeContainer;