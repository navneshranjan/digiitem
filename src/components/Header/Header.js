import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="logo">Postara</h1>
      <nav>
        <ul className="listItem">
          <li>Home</li>
          <li>Live</li>
          <li>Chat</li>
        </ul>
      </nav>

      <div>icon</div>
    </div>
  );
};

export default Header;
