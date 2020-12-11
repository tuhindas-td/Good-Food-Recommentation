import { useState } from "react";

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
var genres = Object.keys(foodDictionary);

function App() {
  const [selectedGenre, setGenre] = useState("Indian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="container-center">
      <nav>🍔 GoodFoods</nav>
      <p>Checkout my favourite foods. Select a genre to get started.</p>
      <div>
        {genres.map((currentGenre) => {
          return (
            <button
              onClick={() => genreClickHandler(currentGenre)}
              style={{
                backgroundColor: "var(--primary-color)",
                padding: "0.5rem 1rem",
                margin: "1rem 1rem",
                fontSize: "1rem",
                fontWeight: "bold",
                outline: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
              }}
              key={currentGenre}
            >
              {currentGenre}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0px" }}>
          {foodDictionary[selectedGenre].map((food) => {
            return (
              <li
                key={food.recipe}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid var(--primary-color)",
                  maxWidth: "50%",
                  margin: "1rem auto",
                  borderRadius: "0.5rem",
                }}
              >
                <div style={{ fontSize: "larger" }}> {food.recipe} </div>
                <div style={{ fontSize: "smaller" }}> {food.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
