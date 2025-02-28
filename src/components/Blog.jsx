import Title from "../components/Title";
import burger from "../assets/burger.jpg";
import chicken from "../assets/chicken.jpg";
import french from "../assets/french.jpg";
import cake from "../assets/cake.jpg";
import pizza from "../assets/pizza.jpg";
import { Link } from "react-router";
import "../css/Blog.css"; // Import the CSS file

const Blog = () => {
  const blogs = [
    {
      img: chicken,
      description: "How to prepare delicious chicken tenders",
      date: "January 3, 2023",
    },
    {
      img: french,
      description: "Tips for making perfect french fries",
      date: "January 5, 2023",
    },
    {
      img: cake,
      description: "Baking the most delicious cakes",
      date: "January 10, 2023",
    },
    {
      img: pizza,
      description: "Secrets to making a perfect pizza",
      date: "January 15, 2023",
    },
  ];

  return (
    <div className="blog-container">
      <Title title="Our Blog & Articles" />

      <div className="blog-content">
        {/* Left Feature Blog */}
        <Link className="featured-blog">
          <img
            src={burger}
            alt="Healthy food"
          />
          <div className="featured-blog-content">
            <p className="blog-date">January 3, 2023</p>
            <h3 className="featured-blog-title">
              The secret tips & tricks to prepare a perfect burger & pizza
            </h3>
            <p className="featured-blog-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              adipisci, magni cum fuga repudiandae porro neque rem autem sit ad
              odio. Nisi fugit dignissimos, temporibus facilis expedita magni
              reiciendis!
            </p>
          </div>
        </Link>

        {/* Right Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card"
            >
              <img
                src={blog.img}
                alt={`Blog ${index + 1}`}
              />
              <div className="blog-card-content">
                <p className="blog-date">{blog.date}</p>
                <h4 className="blog-card-title">
                  {blog.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="read-all-container">
        <Link
          to={"/blogs"}
          onClick={() => scrollTo(0, 0)}
          className="read-all-button"
        >
          Read All Articles
        </Link>
      </div>
    </div>
  );
};

export default Blog;