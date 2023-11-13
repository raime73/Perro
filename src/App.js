// src/App.js
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education';
import Awards from './sections/Awards/Awards';
import Home from './components/Home/Home';
// Continúa importando otras secciones aquí

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Si tienes un componente Home, de lo contrario usa uno de los existentes como <About /> */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/awards" element={<Awards />} />
            {/* Continúa agregando rutas para otros componentes de sección aquí */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
