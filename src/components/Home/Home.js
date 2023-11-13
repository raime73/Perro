

// src/components/Home/Home.js
import React from 'react';
import './Home.css';
import './Home2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';




const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
      <div className="hero-image"> {/* La imagen se añadirá via CSS */}
          {/* Contenido opcional dentro de la imagen, como un título o botón */}
        </div>
        {/* Contenido existente de la sección hero, como la imagen */}
      </section>
      
      <section className="intro-section">
            <div className="intro-content">
                <h1 className="intro-name">Alejandro Bustos</h1>
                <h2 className="intro-title">Estudiante de Pregrado en Ciencias de la Computación</h2>
                <p className="intro-description">Actualmente estoy cursando mi quinto semestre en ciencias de la computación, caracterizado por una personalidad extrovertida y una habilidad innata para la comunicación y el trabajo en equipo. Me encanta sumergirme en proyectos innovadores que tienen un impacto sustancial en la comunidad.</p>
                <a href="#projects" className="cta-button">Ver Mis Proyectos</a>
            </div>
        </section>


{/* Sección de Habilidades */}

<section className="skills-section">
    <h2>Habilidades Principales</h2>
    <div className="skills-container">

        {/* Python */}
        <div className="skill-card python">
            <div className="skill-content"></div>
            <div className="skill-text">
                <div className="skill-name">Python</div>
                <div className="skill-level">Intermedio</div>
            </div>
        </div>

        {/* JavaScript */}
        <div className="skill-card javascript">
            <div className="skill-content"></div>
            <div className="skill-text">
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">Intermedio</div>
            </div>
        </div>

        {/* React Native */}
        <div className="skill-card react-native">
            <div className="skill-content"></div>
            <div className="skill-text">
                <div className="skill-name">React Native</div>
                <div className="skill-level">Intermedio</div>
            </div>
        </div>

        {/* HTML/CSS */}
        <div className="skill-card html-css">
            <div className="skill-content"></div>
            <div className="skill-text">
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-level">Intermedio</div>
            </div>
        </div>

        {/* Java */}
        <div className="skill-card java">
            <div className="skill-content"></div>
            <div className="skill-text">
                <div className="skill-name">Java</div>
                <div className="skill-level">Básico</div>
            </div>
        </div>

        {/* SQL */}
        <div className="skill-card sql">
            <div className="skill-content"></div>
            <div className="skill-text">
                <div className="skill-name">SQL</div>
                <div className="skill-level">Básico</div>
            </div>
        </div>

    </div>
</section>



{/* Sección de Educación*/}


<section className="education-section">
    <h2>Educación</h2>
    <div className="education-card">
        <div className="tec-image"></div> {/* Cambiado a un div con la clase tec-image */}
        <div className="education-info">
            <h3>Ingeniería en Tecnologias Computacionales</h3>
            <p>Tecnológico de Monterrey</p>
            <p>Agosto 2021 - Hasta la fecha</p>
        </div>
    </div>
    {/* Añade más tarjetas según sea necesario */}
</section>


{/* Sección de Proyectos */}

<section className="project-section">
  <h2>Proyecto Destacado</h2>
  <div className="mipe-image"></div>
  <p>MIPE (Aplicación móvil WPA para emprendedoras desfavorecidas)</p>
</section>


{/* Sección de Reconocimientos */}

<section className="awards-section">
  <h2>Reconocimientos</h2>
  <div className="award">
    <div className="premiosEstatal-image"></div>
    <div className="award-content">
      <h3>Mención Honorable</h3>
      <p>Premio Estatal de la Juventud de Chihuahua, Categoría Ingenio Emprendedor, enero 2023</p>
    </div>
  </div>
  <div className="award">
    <div className="meritoAcademico-image"></div>
    <div className="award-content">
      <h3>Premios al Mérito Académico de la Escuela de Ingeniería</h3>
      <p>Reconocimiento al Proyecto Destacado, abril 2023</p>
    </div>
  </div>
</section>

{/* Sección de contacto */}


<section className="contact-section">
      {/* ... otros elementos ... */}
      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
        <a href="mailto:A01568802@tec.mx">A01568802@tec.mx</a>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
        <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>

    </div>
  );
}

export default Home;
