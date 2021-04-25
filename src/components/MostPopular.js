import React, { useEffect, useState } from "react";

const MostPopular = () => {
  const [mostpopular, setMostpopular] = useState([]);

  const loadMostPopularFromJson = async () => {
    const response = await fetch("mostpopular.json");
    const data = await response.json(); // when the file "mostpopular" has been fetched, then the response shall be parsed to json.
    setMostpopular(data);
  };
  /* alternatively:  fetch("mostpopular.json").then(response => response.json().then(data => setMostpopular()))
    If the alternative is used then add "await" inside useEffect infront of loadMostPopularFromJson()*/

  useEffect(async () => {
    // 18/4, the compiler is not happy without "await". Try to remove "async", check video 7/4 30 min before the end
    loadMostPopularFromJson();
  }, []); //useEffect tends to be rendered over and over again. To avoid this, make sure to finnish of by including an empty "dependency" array to the methods parameters

  return (
    <div>
      <h4 className="fruit-category">{/*fruitCategoryName*/}</h4>
      <ul className="fruits">
        {mostpopular.map((fruit) => (
          <li className="fruits-item">
            <h4 className="fruit-title">{fruit.title}</h4>
            <p className="fruit-price">{fruit.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopular;
