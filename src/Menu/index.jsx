import React from 'react';
import { MenuList } from './MenuList.jsx';

function Menu({ menuItems, handleBtnSeeOrderClick }) {
  return (
    <div className="menu-container">
      <MenuList 
        menuItems={menuItems} 
      />
      <button 
        className="btn-seeOrder" 
        onClick={handleBtnSeeOrderClick}
      >
        See Order
      </button>
    </div>
  );
}

export { Menu };
