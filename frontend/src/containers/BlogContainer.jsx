import Title from "../components/Title";
import burger from "../assets/burger.jpg";
import chicken from "../assets/chicken.jpg";
import french from "../assets/french.jpg";
import cake from "../assets/cake.jpg";
import pizza from "../assets/pizza.jpg";
import { Link } from "react-router";
import '../css/BlogContainer.css'
const BlogContainer = () => {
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
    {
      img: "pasta",
      description: "5 classic pasta recipes to try at home",
      date: "January 20, 2023",
    },
    {
      img: burger,
      description: "How to make the juiciest homemade burgers",
      date: "January 25, 2023",
    },
    {
      img: "sushi",
      description: "Beginner's guide to making sushi at home",
      date: "February 1, 2023",
    },
    {
      img: "steak",
      description: "Cooking the perfect steak: Tips & tricks",
      date: "February 5, 2023",
    },
    {
      img: "salad",
      description: "10 healthy and delicious salad recipes",
      date: "February 10, 2023",
    },
    {
      img: "smoothie",
      description: "How to make refreshing fruit smoothies",
      date: "February 15, 2023",
    },
    {
      img: "soup",
      description: "The best homemade soup recipes for winter",
      date: "February 20, 2023",
    },
    {
      img: "bread",
      description: "Mastering homemade bread: A beginner's guide",
      date: "March 1, 2023",
    },
    {
      img: "tacos",
      description: "Authentic Mexican tacos: What you need to know",
      date: "March 5, 2023",
    },
    {
      img: "bbq",
      description: "BBQ tips: How to grill like a pro",
      date: "March 10, 2023",
    },
    {
      img: "coffee",
      description: "The art of brewing the perfect cup of coffee",
      date: "March 15, 2023",
    },
    {
      img: "chocolate",
      description: "Everything you need to know about chocolate desserts",
      date: "March 20, 2023",
    },
    {
      img: "dumplings",
      description: "How to make perfect dumplings from scratch",
      date: "March 25, 2023",
    },
    {
      img: "seafood",
      description: "A beginner's guide to cooking seafood",
      date: "April 1, 2023",
    },
    {
      img: "curry",
      description: "Spices & secrets for a flavorful homemade curry",
      date: "April 5, 2023",
    },
    {
      img: "pancakes",
      description: "Fluffy pancakes: Tips for the best breakfast",
      date: "April 10, 2023",
    },
  ];

  return (
    <>
      <div className="blog-container-wrapper">
        <div className="blog-container-header">
          <Title title="Latest Food Blogs" />
          <p className="blog-container-description">
            Discover expert tips, recipes, and secrets to elevate your cooking
            skills. From crispy fries to gourmet cakes, explore the art of
            delicious food.
          </p>
        </div>
        <div className="blog-container-grid">
          {blogs.map((blog, index) => (
            <Link key={index} className="blog-container-card">
              <img
                src={blog.img}
                alt={`Blog ${index + 1}`}
                className="blog-container-image"
              />
              <div className="blog-container-content">
                <p className="blog-container-date">{blog.date}</p>
                <h4 className="blog-container-title-text">
                  {blog.description}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogContainer;
