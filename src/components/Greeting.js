import React from "react";

const Greeting = () => {
  return (
    <div>
      <h1 className="greeting">Welcome to </h1>
      <h1 className="greeting">the Fruit shop!</h1>
      <h3 className="greeting">a single page application by Cicci Carboo</h3>
      <br />
      <p className="greeting-paragraf">
        The focus of this app was to learn how to create an animated
        sidebar/navigation drawer. For the process I've used the HTML, CSS,
        JavaScript and ReactJS.
      </p>
      <p className="greeting-paragraf">
        This is my very first frontend application, based on my very, very new
        skills.
      </p>
      <br />
      <p className="greeting-paragraf">
        To see the ReactJS version of the sidebar in action:
      </p>
      <p className="greeting-paragraf start-instructions">
        click the buttons at the top.
      </p>
      <br />
      <a className="drawer-page-link" href="fruitshop.html">
        To toggle the sidebar through vanilla JS, click here!
      </a>
      <br />
      <br />
      <h6>Enjoy!</h6>
    </div>
  );
};

export default Greeting;
