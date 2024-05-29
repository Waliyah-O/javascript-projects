import React, { useState } from "react";
import "./App.css";

function App() {
  const [isUlShown, setIsUlShown] = useState(false);
  const [activeLi, setActiveLi] = useState(null);

  const handleIconClick = () => {
    setIsUlShown(!isUlShown);
    document.querySelector("section").classList.toggle("slide_image");
  };

  const handleLiClick = (index) => {
    setActiveLi(index);
  };

  return (
    <div>
      <ul className={isUlShown ? "ul_show" : ""}>
        <li
          className={activeLi === 0 ? "active" : ""}
          onClick={() => handleLiClick(0)}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={activeLi === 1 ? "active" : ""}
          onClick={() => handleLiClick(1)}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          className={activeLi === 2 ? "active" : ""}
          onClick={() => handleLiClick(2)}
        >
          <a href="#gallery">Gallery</a>
        </li>
        {/* Add more list items here */}
      </ul>
      <section>
        <i className="fas fa-bars" onClick={handleIconClick}></i>
        {/* Add your content here */}
      </section>
    </div>
  );
}

export default App;
