import React, { useState, useEffect } from 'react';
import { MenuItem } from './MenuItem.jsx';
import './Menu.css'
import './MenuList.css'

function MenuList() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Realiza una llamada a tu backend para obtener la lista de pizzas
        // Esto puede variar según cómo esté configurado tu backend y tu enrutamiento de API
        fetch('http://127.0.0.1:3000/api/v1/pizzas') // Reemplaza '/api/menu' con la ruta correcta a tu endpoint de lista de pizzas
        .then((response) => response.json())
        .then((data) => {
            
        // Actualiza el estado con los datos de las pizzas obtenidas del backend
            setMenuItems(data);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de pizzas:', error);
        });
    }, []);


    return (
        <ul className="menu-list pizzas">
        <h2>Pizzas</h2>
        {menuItems.map((menuItem) => (
            <MenuItem key={menuItem._id} menuItem={menuItem} />
        ))}
        </ul>
    );
}

export { MenuList}
