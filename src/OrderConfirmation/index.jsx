import React from "react";
import logo from "./logo-vector.png";
import icon from "./pulgares-para-arriba.png";
import "./index.css";
import { BackToMenuButton } from "../BackToMenuBtn";

function OrderConfirmation({ handleBackToMenu }) {
  const resetLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const handleBackToMenuWithReset = () => {
    resetLocalStorage();
    console.log("Reseteo el almacenamiento local del carrito");
    handleBackToMenu();
  };

  return (
    <section className="bg-main-green min-h-screen flex items-center justify-center">
      <div className="order-confirmation-container text-white p-8 rounded-lg shadow-lg">
        <div className="pizza-logo-container">
          <div className="logo-box">
            <img src={logo} alt="Company Logo" className="pizza" draggable="false" />
          </div>
        </div>
        <div className="confirmation-message mt-4">
          <p className="text-2xl font-bold">Order confirmed!</p>
          <img src={icon} alt="Thumbs Up" className="h-12 rounded-full mt-4" />
        </div>
        <div className="container-backBtn mt-4">
          <BackToMenuButton className="back-btn" handleBackToMenu={handleBackToMenuWithReset} />
        </div>
      </div>
    </section>
  );
}

export { OrderConfirmation };
