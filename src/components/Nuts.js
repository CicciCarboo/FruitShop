import React, { useState, useEffect } from "react";

const Nuts = () => {
  const [fruits, setFruits] = useState([]);

  const loadNutsFromJson = async () => {
    const response = await fetch("nuts.json");
    const data = await response.json(); // when the file "mostpopular" has been fetched, then the response shall be parsed to json.
    setFruits(data);
  };
  /* alternatively:  fetch("mostpopular.json").then(response => response.json().then(data => setMostpopular()))
      If the alternative is used then add "await" inside useEffect infront of loadMostPopularFromJson()*/

  useEffect(async () => {
    // 18/4, the compiler is not happy without "await". Try to remove "async", check video 7/4 30 min before the end
    loadNutsFromJson();
  }, []); //useEffect tends to be rendered over and over again. To avoid this, make sure to finnish of by including an empty "dependency" array to the methods parameters

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
