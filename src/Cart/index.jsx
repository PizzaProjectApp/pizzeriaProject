import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { BackToMenuButton } from "../BackToMenuBtn";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
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
            <CartItem key={item._id} item={item} handleRemoveFromCart={handleRemoveFromCart} />
          ))}
        </div>
      </section>
      <CartTotal totalPrice={totalPrice} onConfirmOrder={onConfirmOrder} />
    </div>
  );
}

export { Cart };
