import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./index.css";

const BackToMenuButton = ({ handleBackToMenu }) => {
  return (
    <button className="Btn" onClick={handleBackToMenu}>
      <figure className="back">
        <IoIosArrowBack className="icon-arrow" />
        <span className="btn-text">Menu</span>
      </figure>
    </button>
  );
};

export { BackToMenuButton };
