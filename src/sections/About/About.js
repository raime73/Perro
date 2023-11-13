// src/sections/About/About.js
import React from 'react';
import './About.css'; // Asegúrate de importar el archivo CSS aquí

const About = () => {
  return (
    <section className="about-section"> {/* Usa la clase que definiremos en CSS */}
      <div className="container">
        <h2>Sobre mí</h2>
        <p>
          Actualmente estoy cursando mi quinto semestre en ciencias de la computación, caracterizado por una personalidad extrovertida y una habilidad para la comunicación y el trabajo en equipo. Me encanta sumergirme en proyectos innovadores que tienen un impacto sustancial en la comunidad.
        </p>
        {/* Agrega cualquier otra información que consideres relevante */}
      </div>
    </section>
  );
}

export default About;
