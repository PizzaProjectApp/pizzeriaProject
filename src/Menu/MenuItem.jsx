import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { AppContext } from "../App";

function MenuItem({ menuItem }) {
  const { addToCart, removeFromCart } = useContext(AppContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      const storedItem = storedCart.find(item => item._id === menuItem._id);
      if (storedItem) {
        setCount(storedItem.count);
      }
    }
  }, [menuItem._id]);

  const incrementCount = () => {
    setCount(count + 1);
    addToCart(menuItem);
    updateLocalStorageCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      removeFromCart(menuItem);
      updateLocalStorageCount(count - 1);
    }
  };

  const updateLocalStorageCount = newCount => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      const updatedCart = storedCart.map(item => {
        if (item._id === menuItem._id) {
          return { ...item, count: newCount };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <li className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
      <div className="font-semibold text-lg mb-2">{menuItem.name}</div>
      <div className="text-gray-600 mb-4">{menuItem.description}</div>

      <div className="flex justify-center">
        <img src={menuItem.thumbnail} alt="" className="w-48 h-48 rounded-lg" draggable="false" />
      </div>

      <div className="flex items-center justify-center mt-4 space-x-6">
        <button
          className="text-white bg-main-teal hover:bg-main-tomate rounded-full w-8 h-8 flex items-center justify-center"
          onClick={decrementCount}>
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          className="text-white bg-main-teal hover:bg-main-tomate rounded-full w-8 h-8 flex items-center justify-center"
          onClick={incrementCount}>
          +
        </button>
      </div>
    </li>
  );
}

export { MenuItem };
