import React from "react";
import Nav from "../../homepage/Nav";
import "./CLanguage.css";

function CLanguage() {
  return (
    <div>
      <Nav />
      <div>
        <ul className="csidebar">
          <li>C Introduction</li>
          <li>C Basics</li>
          <li>C Installation</li>
          <li>First Program in C</li>
        </ul>
      </div>
    </div>
  );
}

export default CLanguage;
