import React, { useState, useEffect } from "react";
import { MenuItem } from "./MenuItem.jsx";

const categories = [
  { name: "pizzas", title: "Pizzas" },
  { name: "beverages", title: "Bebidas" },
  { name: "desserts", title: "Postres" },
  { name: "empanadas", title: "Empanadas" }
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
            [category.name]: data
          }));
        })
        .catch(error => {
          console.error(`Error al obtener la lista de ${category.name}:`, error);
        });
    });
  }, []);

  return (
    <div className="bg-red-100 rounded-xl space-y-4 p-4">
      {categories.map(category => (
        <ul className={`menu-list ${category.name} bg-white p-4 rounded-lg shadow-xl`} key={category.name}>
          <h2 className="text-2xl font-bold">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {menuItems[category.name] &&
              menuItems[category.name].map(menuItem => <MenuItem key={menuItem._id} menuItem={menuItem} />)}
          </div>
        </ul>
      ))}
    </div>
  );
}

export { MenuList };
