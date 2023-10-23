import React, { useContext, useEffect, useState } from 'react';
import './MenuItem.css';
import { AppContext } from '../App';

function MenuItem({ menuItem }) {
    const { addToCart, removeFromCart } = useContext(AppContext);

    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
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

    const updateLocalStorageCount = (newCount) => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            const updatedCart = storedCart.map(item => {
                if (item._id === menuItem._id) {
                    return { ...item, count: newCount };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
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