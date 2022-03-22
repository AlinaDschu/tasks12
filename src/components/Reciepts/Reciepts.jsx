import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const Reciepts = () => {
  const [meal, setMeal] = useState([]);

  return (
    <div>
      <input
        type="radio"
        name="food"
        value="плов"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Плов</label>
      <input
        type="radio"
        name="food"
        value="манты"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Манты</label>
      <input
        type="radio"
        name="food"
        value="лагман"
        onChange={(e) => setMeal(e.target.value)}
      />
      <label>Лагман</label>
      <Ingredients meal={meal} />
      <Reciepts />
    </div>
  );
};

export default Reciepts;
