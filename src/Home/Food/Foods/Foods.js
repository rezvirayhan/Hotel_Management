import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ourFood")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="container">
      <h1>Our Food:</h1>
      <div className="row">
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
