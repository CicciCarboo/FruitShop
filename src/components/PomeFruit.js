import React, { useEffect, useState } from "react";

const PomeFruit = () => {
  const [pomefruit, setPomefruit] = useState([]);

  const fetchPomefruit = async () => {
    const response = await fetch("pomefruit.json");
    const pomefruitData = await response.json(); // here we tell the program to interprete the information it receives as json.
    setPomefruit(pomefruitData);
  }; /* After been initialized, this function must be invoked within useEffect to actually do something */

  useEffect(() => {
    if (!pomefruit.length) {
      /*this if-statement makes sure that this function is not invoked over and over again*/
      fetchPomefruit();
    }
  });
  return (
    <>
      <h4 className="fruit-category">{/*fruitCategoryName*/}</h4>
      <ul className="fruits">
        {pomefruit.map((fruit) => (
          <li className="fruits-item">
            <h4 className="fruit-title">{fruit.title}</h4>
            <p className="fruit-price">{fruit.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PomeFruit;
