import React, { useContext, useState } from 'react';
import './MenuItem.css';
import { AppContext } from '../App'; // Asegúrate de importar el contexto AppContext aquí

function MenuItem({ menuItem }) {
    const [count, setCount] = useState(0); // Agrega la definición de 'count' utilizando useState
    const { addToCart } = useContext(AppContext); // Obtén la función addToCart del contexto

    const incrementCount = () => {
        setCount(count + 1);
        addToCart(menuItem); // Agrega el objeto menuItem al carrito utilizando la función addToCart del contexto
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <li id={menuItem._id}>
            <div className='product-info'>
                <p className='item-name'>{menuItem.name}</p>
                <p className="description-product">{menuItem.description}</p>
            </div>

            <figure>
                <img src={menuItem.thumbnail} alt="" className="product" />
            </figure>

            <p className="item-price">{menuItem.price}</p>

            <div className="container-button">
                <button className="remove-from-cart-button" onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button className="add-to-cart-button" onClick={incrementCount}>+</button>
            </div>
        </li>
    );
}

export { MenuItem };
