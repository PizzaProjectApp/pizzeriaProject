import React from "react";
import logo from "/src/assets/logo-vector1.png";
import "./index.css";

function Header({ isCart }) {
  return (
    <header className="bg-main-tomate flex items-start justify-center px-8">
      <nav className="text-white text-3xl font-bold">
        {isCart ? (
          <p className="header-cart">My Order</p>
        ) : (
          <div className="logo-container">
            <img src={logo} className="w-40 h-40" alt="Logo" draggable="false" />
          </div>
        )}
      </nav>
    </header>
  );
}

export { Header };
