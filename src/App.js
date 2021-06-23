//import logo from './logo.svg';
import { useState } from "react";
//import "./App.css";
import styles from "./StyleModules/Sidebar.module.css";
import Greeting from "./components/Greeting";
import Sidebar from "./components/Sidebar";
import MostPopular from "./components/MostPopular";
import PomeFruit from "./components/PomeFruit";
import FruitShop from "./components/FruitShop";
import StoneFruits from "./components/StoneFruits";
import Nuts from "./components/Nuts";
import Vegetables from "./components/Vegetables";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [fruitCategory, setFruitCategory] = useState("mostpopular"); //This state-variable fills the web page with given fruit category: mostpopular, pomefruit, stonefruits, nuts, vegetables
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <Router>
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {/* First column */}
              <div className={styles.buttonsContainer}>
                <button
                  className={styles.openSidebarButton}
                  title="Open sidebar"
                  onClick={() => {
                    setIsSidebarVisible(true);
                  }}
                >
                  <i className="fas fa-apple-alt"></i>
                </button>
                <button
                  type="button"
                  className={styles.closeSidebarButton}
                  title="Close sidebar"
                  onClick={() => setIsSidebarVisible(false)}
                >
                  X
                </button>

                <Sidebar
                  isVisible={isSidebarVisible}
                  updateFruitCategory={setFruitCategory}
                />
              </div>
            </div>
            <div className="col-sm">
              {/* Middle column */}
              <Greeting />
              <Switch>
                <Route path="/Fruitshop">
                  <FruitShop fruitCategoryName={fruitCategory} />{" "}
                </Route>
                <Route path="/PomeFruit" component={PomeFruit} />
                {/*This kind of Route only works if the component does NOT recieve a prop */}
                <Route path="/StoneFruits">
                  <StoneFruits />
                </Route>
                <Route path="/Nuts">
                  <Nuts />
                </Route>
                <Route path="/Vegetables">
                  <Vegetables />
                </Route>
              </Switch>

              {/* the props fruitCategoryName is "declared" here, also initiated with fruitCategory, to be used where?*/}
            </div>
            <div className="col-sm">{/* Third column */}</div>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
