import React from 'react';
import './MenuItem.css'
import { MenuList } from './MenuList.jsx';

function Menu({ menuItems, handleBtnSeeOrderClick, setIsCart, isCart }) {
  const handleCombinedClick = () => {
    handleBtnSeeOrderClick(); // Realiza la funcionalidad existente
    setIsCart(!isCart); // Cambia el estado de isCart
  };

  return (
    <div className="menu-container">
      <MenuList menuItems={menuItems} />
      <button className="btn-seeOrder" onClick={handleCombinedClick}>
        See Order
      </button>
    </div>
  );
}

export { Menu };
