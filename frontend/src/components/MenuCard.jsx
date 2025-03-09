import "../styles/MenuCard.css"; // Import the CSS file

const MenuCard = ({ category }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-img-container">
        <img src={category.img} alt={category.title} />
      </div>
      <div className="menu-card-content">
        <h3 className="menu-card-title">{category.title}</h3>
        <p className="menu-card-description">{category.description}</p>
        <button className="menu-card-button">Explore Menu</button>
      </div>
    </div>
  );
};

export default MenuCard;
