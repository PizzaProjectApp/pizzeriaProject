import React, { useState, useEffect } from 'react';
import { MenuItem } from './MenuItem.jsx';
import './Menu.css';
import './MenuList.css';

const categories = [
  { name: 'pizzas', title: 'Pizzas' },
  { name: 'beverages', title: 'Bebidas' },
  { name: 'desserts', title: 'Postres' },
  { name: 'empanadas', title: 'Empanadas' },
  // Agrega más categorías si es necesario
];

function MenuList() {
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    categories.forEach(category => {
      fetch(`http://127.0.0.1:3000/api/v1/${category.name}`)
        .then(response => response.json())
        .then(data => {
          setMenuItems(prevState => ({
            ...prevState,
            [category.name]: data,
          }));
        })
        .catch(error => {
          console.error(`Error al obtener la lista de ${category.name}:`, error);
        });
    });
  }, []);

  return (
    <div>
      {categories.map(category => (
        <ul className={`menu-list ${category.name}`} key={category.name}>
          <h2>{category.title}</h2>
          {menuItems[category.name] &&
            menuItems[category.name].map(menuItem => (
              <MenuItem key={menuItem._id} menuItem={menuItem} />
            ))}
        </ul>
      ))}
    </div>
  );
}

export { MenuList };
