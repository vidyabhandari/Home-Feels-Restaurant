// Reviews.jsx
import Title from "./Title";
import ReviewsCard from "./ReviewsCard";
import reviewOne from "../assets/review-one.png";
import reviewTwo from "../assets/review-two.png";
import reviewThree from "../assets/review-three.png";
import '../css/Reviews.css'; // Import the CSS file

const Reviews = () => {
  const reviews = [
    {
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      title: "The best restaurant",
      description:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      img: reviewOne,
    },
    {
      name: "Matt Cannon",
      location: "San Diego, CA",
      title: "Simply delicious",
      description:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      img: reviewTwo,
    },
    {
      name: "Andy Smith",
      location: "San Francisco, CA",
      title: "One of a kind restaurant",
      description:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      img: reviewThree,
    },
  ];

  return (
    <div className="reviews-container">
      <Title title="What out Customer Says" />
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <ReviewsCard review={review} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;