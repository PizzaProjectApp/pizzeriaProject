import React from "react";

function CartTotal({ totalPrice, onConfirmOrder }) {
  return (
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
  );
}

export default CartTotal;
