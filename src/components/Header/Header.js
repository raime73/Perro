import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">
                        <NavLink to="/" exact>Alejandro Bustos</NavLink> {/* Esto navegará a la página de inicio */}
                    </div>

                    {/* Botón para el menú de hamburguesa */}
                    <button onClick={toggleMenu} className="menu-toggle">Menu</button>

                    <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><NavLink to="/about" activeClassName="active-link">Sobre mí</NavLink></li>
                            <li><NavLink to="/projects" activeClassName="active-link">Proyectos</NavLink></li>
                            <li><NavLink to="/skills" activeClassName="active-link">Habilidades</NavLink></li>
                            <li><NavLink to="/education" activeClassName="active-link">Educación</NavLink></li>
                            <li><NavLink to="/awards" activeClassName="active-link">Reconocimientos</NavLink></li>
                        </ul>
                    </nav>

                    <div className="header-contact">
                        <a href="mailto:example@email.com" className="cta-button">Contáctame</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
