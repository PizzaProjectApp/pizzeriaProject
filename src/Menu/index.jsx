import React from "react";
import { MenuList } from "./MenuList.jsx";

function Menu({ menuItems, handleBtnSeeOrderClick, setIsCart, isCart }) {
  const handleCombinedClick = () => {
    handleBtnSeeOrderClick();
    setIsCart(!isCart);
  };

  return (
    <div className="menu-container max-w-4xl mx-auto bg-white rounded-3xl relative bottom-14 p-4">
      <MenuList menuItems={menuItems} />

      <div className="container-button flex justify-center w-full">
        <button
          className="btn-seeOrder mt-14 h-16 px-5 rounded-3xl bg-main-tomate text-white shadow-lg fixed bottom-10 right-5"
          onClick={handleCombinedClick}>
          See Order
        </button>
      </div>
    </div>
  );
}

export { Menu };
