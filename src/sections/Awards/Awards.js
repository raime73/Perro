// src/sections/Awards/Awards.js
import React from 'react';
import './Awards.css';

const Awards = () => {
  return (
    <section className="awards">
      <div className="container">
        <h2>Reconocimientos</h2>
        <div className="award-item">
          <h3>Mención Honorable - Premio Estatal de la Juventud de Chihuahua</h3>
          <p>Categoría Ingenio Emprendedor, Enero 2023</p>
          {/* Agrega más información si es necesario */}
        </div>
        {/* Agrega más premios si es necesario */}
      </div>
    </section>
  );
}

export default Awards;
