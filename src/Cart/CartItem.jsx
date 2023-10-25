import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

function CartItem({ item, handleRemoveFromCart }) {
  return (
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
  );
}

export default CartItem;
