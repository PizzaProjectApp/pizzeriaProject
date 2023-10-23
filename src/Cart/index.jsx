import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../App';
import { BackToMenuButton } from '../BackToMenuBtn';
import { MdOutlineDeleteForever } from 'react-icons/md';

import './Cart.css';

function Cart({ showOrderConfirmation, onConfirmOrder, handleBackToMenu }) {
  const { cartItems, removeFromCart } = useContext(AppContext);
  const [groupedCartItems, setGroupedCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Agregar estado para almacenar el precio total

  // Función para calcular el precio total del carrito
  const calculateTotalPrice = () => {
    let total = 0;
    groupedCartItems.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  };

  useEffect(() => {
    // Actualizar el estado de 'groupedCartItems' en lugar de 'cartItems'
    setTotalPrice(calculateTotalPrice());
  }, [groupedCartItems]); // Actualizar cada vez que cambie 'groupedCartItems'

  useEffect(() => {
    const getGroupedCartItems = () => {
      const groupedItems = {};
      cartItems.forEach(item => {
        if (groupedItems[item._id]) {
          groupedItems[item._id].count += item.count; // Actualiza el contador con el valor actualizado
        } else {
          groupedItems[item._id] = { ...item }; // Crea una copia del item
        }
      });
      setGroupedCartItems(Object.values(groupedItems));
    };

    getGroupedCartItems();
  }, [cartItems]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart && JSON.parse(storedCart).length === 0) {
      setGroupedCartItems([]);
    }
  }, []);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
    const updatedCartItems = groupedCartItems.filter(cartItem => cartItem._id !== item._id); // Actualizar 'groupedCartItems' en lugar de 'cartItems'
    setGroupedCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleBackToMenuClick = () => {
    handleBackToMenu(); // Llama a la función handleBackToMenu pasada como prop
  };

  return (
    <div>
      <section className="my-order">
        <div className="container-cards">
          {groupedCartItems.map((item) => (
            <div className="card" key={item._id}>
              <img src={item.thumbnail} alt={item.name} />

              <div className="info">
                <span className="product">{item.name} x {item.count}</span>
                <span>${item.price}</span>
              </div>

              <button
                className="delete-product"
                onClick={() => handleRemoveFromCart(item)}
              >
                <MdOutlineDeleteForever className='delete-product-icon' />
              </button>
            </div>
          ))}
        </div>

        <div className='container-total'>
          <div className="total-price">
            <span>Total:</span>
            <span>${totalPrice}</span> {/* Mostrar el precio total */}
          </div>
        </div>

        <div className='container-backBtn'>
          <BackToMenuButton
            handleBackToMenu={handleBackToMenuClick}
          />
        </div>

        {showOrderConfirmation && (
          <div className="confirm">
            <p>Order confirmed!</p>
            <img src="./pulgares-para-arriba.png" alt="" />
          </div>
        )}

        {!showOrderConfirmation && (
          <div className="container-button">
            <button className="confirm" onClick={onConfirmOrder}>Confirm my order</button>
          </div>
        )}
      </section>
    </div>
  );
}

export { Cart };
