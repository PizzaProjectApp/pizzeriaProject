import React, { useContext } from 'react';
import { AppContext } from '../App';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BackToMenuButton } from '../BackToMenuBtn/index.jsx';
import './Cart.css';

function Cart({ showOrderConfirmation, onConfirmOrder, handleBackToMenu }) { // Se agrega showOrderConfirmation y onConfirmOrder a las props
  const { cartItems, removeFromCart } = useContext(AppContext);

  const getGroupedCartItems = () => {
    const groupedItems = {};
    cartItems.forEach(item => {
      if (groupedItems[item._id]) {
        groupedItems[item._id].count = item.count; // Actualiza el contador con el valor actualizado
      } else {
        groupedItems[item._id] = { ...item }; // Crea una copia del item
      }
    });
    return Object.values(groupedItems);
  };

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  };

  const groupedCartItems = getGroupedCartItems();
  const totalPrice = getTotalPrice();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };
  const handleBackToMenuClick = () => {
    handleBackToMenu(); // Llama a la función handleBackToMenu pasada como prop
  };

  return (
    <div>
      <section className="my-order">
        <div className="container-cards">
          {groupedCartItems && groupedCartItems.map((item) => (
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
      </section> 
      
      <div className='container-total'>
        <div className="total-price">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      {showOrderConfirmation && ( // Agrega condición para mostrar el componente OrderConfirmation
        <div className="confirm">
          <p>Order confirmed!</p>
          <img src="./pulgares-para-arriba.png" alt="" />
        </div>
      )}

      {!showOrderConfirmation && ( // Agrega condición para mostrar el botón de confirmación
        <div className="container-button">
          <button className="confirm" onClick={onConfirmOrder}>Confirm my order</button>
        </div>
      )}
      <BackToMenuButton
        handleBackToMenu={handleBackToMenuClick}/>

    </div>
  );
}

export { Cart };
