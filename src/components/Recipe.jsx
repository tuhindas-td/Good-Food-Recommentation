const Recipe = ({ recipe, rating }) => {
  return (
    <li key={recipe} className="recipe-list-item">
      <div style={{ fontSize: "1.1rem" }}>{recipe}</div>
      <div style={{ fontSize: "0.9rem" }}>Rating: {rating}</div>
    </li>
  );
};

export default Recipe;
