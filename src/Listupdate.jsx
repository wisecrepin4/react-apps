import React, { useState } from "react";
export default function Listupdate() {
  const [foods, setFoods] = useState([
    "apple",
    "banana",
    " bread",
    "strawberry",
    " grapes",
  ]);

  const handleFoodAdd = () => {
    const newFood = document.querySelector(".foodInput").value;
    document.querySelector(".foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods((f) => f.filter((_, i) => i != index));
  };
  return (
    <div>
      <h1>List of Food</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="foodInput"
        placeholder="Enter another food"
        // value=""
        // onChange={}
      />
      <button onClick={handleFoodAdd}>Add Food</button>
    </div>
  );
}
