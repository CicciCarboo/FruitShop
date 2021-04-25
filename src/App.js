//import logo from './logo.svg';
import {useState} from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Sidebar from "./components/Sidebar";
import MostPopular from "./components/MostPopular";
import PomeFruit from "./components/PomeFruit";
import FruitShop from "./components/FruitShop";

function App() {
  const [fruitCategory, setFruitCategory] = useState("pomefruit");//This state-variable fills the web page with given fruit category: mostpopular, pomefruit, stonefruits, nuts, vegetables

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {/* First column */}
          <Sidebar setFruitCategory = {setFruitCategory}/>
          </div>
          <div className="col-sm">
            {/* Middle column */}
            <Greeting />
            <FruitShop fruitCategoryName={fruitCategory} /> {/* the props? fruitCategoryName is "declared" here, also initiated with fruitCategory, to be used where?*/}
         
        
       {/* <Greeting />   <PomeFruit />
      <MostPopular/>
      */}
          </div>
          <div className="col-sm">
            {/* Third column */}
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
