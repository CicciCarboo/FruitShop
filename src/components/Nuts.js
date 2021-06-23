import React, { useState, useEffect } from "react";

const Nuts = () => {
  const [fruits, setFruits] = useState([]);

  const loadNutsFromJson = async () => {
    const response = await fetch("nuts.json");
    const data = await response.json();
    setFruits(data);
  };

  useEffect(async () => {
    // 18/4, the compiler is not happy without "await". Try to remove "async", check video 7/4 30 min before the end
    loadNutsFromJson();
  }, []);
  return (
    <div>
      <h3 className="fruit-category">Nuts</h3>
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

export default Nuts;
