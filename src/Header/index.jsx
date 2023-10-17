import React, { useState } from 'react';
import logo from '/src/assets/logo-vector.png';
import './Header.css';

function Header() {
  const [isCart, setIsCart] = useState(false);

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
