import React from 'react';


/*drawer menu */

const Sidebar = ({setFruitCategory}) => {

  /*function openNav(){
    document.getElementById("drawer").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
  }*/

  const closeNav = () => {
    document.getElementById("drawer").style.width = "";
    document.getElementById("main").style.marginLeft = "";
  }

  return (
    <div>  
      <div id="drawer" className="menu" style={{left: '0px'}}>
        <a className="menu-link close-button" href="javascript:void(0)" onClick = { () => closeNav()}>
          ×
          </a> 
        <a className="menu-link" onClick = {() => setFruitCategory("mostpopular")}>
          Most popular fruits
        </a>
        <a className="menu-link" onClick = {() => setFruitCategory("stonefruits")}>
          Stone fruits
        </a>
        <a className="menu-link" onClick = {() => setFruitCategory("pomefruit")}>
          Pome fruit
        </a>
        <a className="menu-link" onClick = {() => setFruitCategory("nuts")}>
          Nuts
        </a>
        <a className="menu-link" onClick = {() => setFruitCategory("vegetables")}>
          Vegetables
        </a>
      
      </div>
      <div id="main">
            <button className="menu-button" onClick="openNav()">
              <i className="fas fa-apple-alt">
            </i>
          </button>
        </div>
    </div>
  )
};

export default Sidebar;
