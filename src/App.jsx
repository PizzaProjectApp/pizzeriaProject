import React, { useState, useEffect, createContext } from 'react';
import { Header } from './Header/index.jsx';
import { Menu } from './Menu/index.jsx';
import { Cart } from './Cart/index.jsx';
import { OrderConfirmation } from './OrderConfirmation/index.jsx';

export const AppContext = createContext();

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [cartItems, setCartItems] = useState(()=>{
    const cartData = JSON.parse(localStorage.getItem('cart'));
    return cartData || [];
  });
  const [showCart, setShowCart] = useState(true);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCartItems(cartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (menuItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item._id === menuItem._id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].count++;
      setCartItems(updatedCart);
      console.log(updatedCart[existingItemIndex].count); // Imprime el contador actualizado
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...menuItem, count: 1 }]);
    }
  };

  const removeFromCart = (menuItem) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item._id === menuItem._id);

    if (existingItem) {
      if (existingItem.count === 1) {
        const index = updatedCart.indexOf(existingItem);
        updatedCart.splice(index, 1);
      } else {
        existingItem.count--;
      }
    }
    setCartItems(updatedCart);
  };

  const handleConfirmOrder = () => {
    // Limpiar los datos antiguos del localStorage
    localStorage.removeItem('cart');
  
    // Restablecer el estado del carrito a un array vacío
    setCartItems([]);
  
    // Mostrar la confirmación de la orden
    setShowCart(false);
    setShowOrderConfirmation(true);
  };
  const handleBackToMenu = () => {
    setShowMenu(true);
    setIsCart(false); // Establece isCart en falso al volver al menú
    setShowOrderConfirmation(false);
  };

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {showOrderConfirmation ? (
        <OrderConfirmation handleBackToMenu={handleBackToMenu}  />
      ) : (
        <div>
          <Header 
            isCart={isCart}
             /> 
          {showMenu ? (
            <Menu
              menuItems={menuItems}
              handleBtnSeeOrderClick={() => setShowMenu(!showMenu)}
              setIsCart={setIsCart} // Pasa setIsCart al componente Menu
              isCart={isCart} // Pasa isCart al componente Menu
              
            />
          ) : (
            <Cart
              onConfirmOrder={handleConfirmOrder}
              showOrderConfirmation={showOrderConfirmation}
              handleBackToMenu={handleBackToMenu}
              
            />
          )}
        </div>
      )}
    </AppContext.Provider>
  );
}

export default App;
