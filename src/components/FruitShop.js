import React, { useEffect, useState } from "react";
import Greeting from "./Greeting";
import Sidebar from "./Sidebar";

/*
Create a react app.DONE
Create a component for the Sidebar, and place it in the App.tsx, DONE but App.js
Create  component for the FruitShop, -||- DONE
Add useEffect and fetch to the FruitShop component. DONE
Save the data in a useState-variable. DONE
Use map in the FruitShop component to list the content. DONE
Todo: a switch to change fruit category name with capital letter in the li's h3. DONE!!!!
Todo: Put a link from landing page to the first Fruit shop page, to demonstrate the toggle sidebar. DONE
Todo: Make the sidebar toggle on the landing page. DONE

TODO: #fruits_item_top: top item, 
preferably without border-top. Find a workaround, due to mapping in FruitShop.js:
maybe selecting the top-item trough some kind of indexing of the array???
Todo: connect the sidebars links to the json-files through routing. OR global states through Redux
Maybe: For all menu-links do something like this: onClick => setVisible(false) eg. close sidebar

*/

const FruitShop = ({ fruitCategoryName }) => {
  // const fruitCategoryName = "mostpopular".

  // const url = fruitCategoryName+".json"; This is one way to do it, below is an other way to do the same thing:
  const url = `${fruitCategoryName}.json`;

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

  const renderSwitch = (fruitCategoryName) => {
    switch (fruitCategoryName) {
      case "mostpopular":
        return "Most popular products";
      case "pomefruit":
        return "Pome fruit";
      case "stonefruits":
        return "Stone fruits";
      case "nuts":
        return "Nuts";
      case "vegetables":
        return "Vegetables";
      default:
        return "Most popular products";
    }
  };
  return (
    <div>
      {/* <Greeting /> */}
      <h3 className="fruit-category">{renderSwitch(fruitCategoryName)}</h3>
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

export default FruitShop;
