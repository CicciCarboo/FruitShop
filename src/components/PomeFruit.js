import React, { useEffect, useState } from "react";

const PomeFruit = () => {
  const url = "/pomefruit.json";

  const [fruits, setFruits] = useState([]); // useState = a kind of local memory.

  useEffect(async () => {
    //useEffect uses the information in the .json-file to populate the useState-array of fruits.
    if (fruits.length === 0) {
      const response = await fetch(url);
      const fruitData = await response.json();
      setFruits(fruitData);
    }
  }, [url]);
  // console.log(fruits);

  return (
    <div>
      <h3 className="fruit-category">Pome fruit</h3>
      <ul className="fruits">
        {fruits.map((fruit) => (
          <li className="fruits_item">
            <h4>{fruit.title}</h4>
            <p>{fruit.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PomeFruit;
