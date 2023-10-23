import React from 'react';
import logo from '/src/assets/logo-vector1.png';
import './Header.css';

function Header({ isCart }) {
  return (
    <header>
      <nav>
        {isCart ? (
          <p className="header-cart">My order</p>
        ) : (
          <img src={logo} className="logo" alt="Logo" />
        )}
      </nav>
    </header>
  );
}

export { Header };
