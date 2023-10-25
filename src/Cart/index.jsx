import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { BackToMenuButton } from "../BackToMenuBtn";
import { MdOutlineDeleteForever } from "react-icons/md";

function Cart({ showOrderConfirmation, onConfirmOrder, handleBackToMenu }) {
  const { cartItems, removeFromCart } = useContext(AppContext);
  const [groupedCartItems, setGroupedCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    groupedCartItems.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [groupedCartItems]);

  useEffect(() => {
    const getGroupedCartItems = () => {
      const groupedItems = {};
      cartItems.forEach(item => {
        if (groupedItems[item._id]) {
          groupedItems[item._id].count += item.count;
        } else {
          groupedItems[item._id] = { ...item };
        }
      });
      setGroupedCartItems(Object.values(groupedItems));
    };

    getGroupedCartItems();
  }, [cartItems]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart && JSON.parse(storedCart).length === 0) {
      setGroupedCartItems([]);
    }
  }, []);

  const handleRemoveFromCart = item => {
    removeFromCart(item);
    const updatedCartItems = groupedCartItems.filter(cartItem => cartItem._id !== item._id);
    setGroupedCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleBackToMenuClick = () => {
    handleBackToMenu();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <section className="my-order container mx-auto ">
        <div className="flex justify-between items-center mb-4">
          <BackToMenuButton className="back-btn" handleBackToMenu={handleBackToMenuClick} />
          <h2 className="text-2xl font-bold">Your Cart</h2>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {groupedCartItems.map(item => (
            <div key={item._id} className="pizza-card bg-white rounded-md shadow-md p-4 flex">
              <div className="pizza-image">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="h-32 w-32 rounded-md object-cover cursor-pointer"
                  onClick={() => handleRemoveFromCart(item)}
                />
              </div>

              <div className="pizza-details flex flex-col flex-1 text-brown">
                <span className="pizza-name font-bold text-lg text-brown mb-1">
                  {item.name} x{item.count}
                </span>
                <span className="pizza-price text-brown text-sm">${item.price}</span>
              </div>

              <button
                className="delete-product ml-auto bg-transparent border-none cursor-pointer focus:outline-none"
                onClick={() => handleRemoveFromCart(item)}>
                <MdOutlineDeleteForever className="text-red-600 w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="container-total fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg">
        <div className="total-price grid grid-cols-2 w-70 font-bold">
          <span className="self-center text-right">Total:</span>
          <span className="self-center text-left">${totalPrice}</span>
        </div>
        <div className="container-button flex justify-center">
          <button
            className="confirm bg-main-tomato text-main-tomate font-bold p-4 rounded-lg shadow-md"
            onClick={onConfirmOrder}>
            Confirm my order
          </button>
        </div>
      </div>
    </div>
  );
}

export { Cart };
