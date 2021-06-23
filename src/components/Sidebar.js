import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "../StyleModules/Sidebar.module.css";

/*drawer menu */

const Sidebar = (props, { updateFruitCategory }) => {
  
  const isVisible = props.isVisible;

  return (
    <div>
      <div
        id="drawer"
        className={`${styles.sidebar} ${
          isVisible ? styles.sidebarVisible : ""
        }`}
      >
        {/* <button
      type="button"
      className={styles.closeSidebarButton}
      onClick={() => setIsSidebarVisible(false)}
    >
      X
    </button> */}
        <ul className={styles.menuList}>
          {/* 'onClick' is an event, and can not be filled with a function directly. I have to give the event an anonymous function that calls the 'real' function that I want to use. */}
          <li
            className={
              styles.menuLink
            } /*onClick={() => updateFruitCategory("mostpopular")}*/
          >
            <Link to="/FruitShop" className={styles.menuLink}>
              Start page
            </Link>
          </li>
          <li
            className={
              styles.menuLink
            } /*onClick={() => updateFruitCategory("nuts")}*/
          >
            <Link to="/Nuts" className={styles.menuLink}>
              {" "}
              Nuts
            </Link>
          </li>
          <li
            className={
              styles.menuLink
            } /*onClick={() => updateFruitCategory("pomefruit")}*/
          >
            <Link to="/PomeFruit" className={styles.menuLink}>
              {" "}
              Pome Fruit
            </Link>
          </li>
          <li
            className={
              styles.menuLink
            } /*onClick={() => updateFruitCategory("stonefruits")}*/
          >
            <Link to="/StoneFruits" className={styles.menuLink}>
              {" "}
              Stone fruits
            </Link>
          </li>
          <li
            className={
              styles.menuLink
            } /*onClick={() => updateFruitCategory("vegetables")}*/
          >
            <Link to="/Vegetables" className={styles.menuLink}>
              {" "}
              Vegetables
            </Link>
          </li>
        </ul>
      </div>
      <div id="main">
        {/* <button
      className="menu-button"
      onClick={() => {
        setIsSidebarVisible(true);
      }}
    >
      <i className="fas fa-apple-alt"></i>
    </button> */}
      </div>
    </div>
  );
};

export default Sidebar;
