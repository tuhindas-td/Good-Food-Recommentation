import { useState } from "react";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";

const foodDictionary = {
  Indian: [
    { recipe: "Chicken Tikka Masala", rating: "4/5" },
    { recipe: "Paneer Butter Masala", rating: "3/5" },
    { recipe: "Mixed Fried Rice", rating: "5/5" },
    { recipe: "Chilli Paneer", rating: "3/5" },
  ],
  Continental: [
    { recipe: "French Fries", rating: "4/5" },
    { recipe: "Cheesy Masala Omelette", rating: "5/5" },
  ],
  Chinese: [
    { recipe: "Chow mein", rating: "4/5" },
    { recipe: "Sweet and Sour Chicken", rating: "3/5" },
    { recipe: "Chilli Chicken", rating: "5/5" },
  ],
};
const genres = Object.keys(foodDictionary);

const App = () => {
  const [selectedGenre, setGenre] = useState("Indian");

  return (
    <div className="container">
      <nav className="navbar">🍔 GoodFoods</nav>
      <nav className="tabs">
        {genres.map((currentGenre, i) => {
          return (
            <button
              key={i}
              onClick={() => setGenre(currentGenre)}
              className="button">
              {currentGenre}
            </button>
          );
        })}
      </nav>
      <ul className="recipe-list-container">
        {foodDictionary[selectedGenre].map((food, i) => {
          return <Recipe key={i} recipe={food.recipe} rating={food.rating} />;
        })}
      </ul>
      <Footer />
    </div>
  );
};
export default App;
