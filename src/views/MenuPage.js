import React from 'react';
import '../css/MenuPage.css'; // Puedes agregar estilos específicos para esta página si lo deseas

const MenuPage = () => {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Restaurante Random</h1>
      </header>
      <main className="menu-content">
        <h3>Menú</h3>
        <ul>
          <li>Pizza - $10.00</li>
          <li>Burguer - $8.00</li>
          <li>Pasta - $12.00</li>
          <li>Ensalada - $7.00</li>
          <li>Postre - $5.00</li>
        </ul>
      </main>
    </div>
  );
};

export default MenuPage;
