import React from 'react';
import { FaPython, FaJsSquare, FaReact, FaHtml5, FaJava, FaDatabase, FaNodeJs } from 'react-icons/fa';
import './Skills.css';

const skills = [
  {
    id: 1,
    icon: <FaPython />,
    title: 'Python',
    level: 'Intermedio',
    description: 'Utilizado para análisis y procesamiento de datos en los proyectos MIPE y CEDAIN.',
  },
  {
    id: 2,
    icon: <FaJsSquare />,
    title: 'JavaScript',
    level: 'Intermedio',
    description: 'Desarrollo del frontend y backend de la aplicación MIPE con HTML, CSS y JavaScript puro. Implementación de lógica y funcionalidades en el proyecto del Sistema de Juicios en Línea utilizando React.',
  },
  {
    id: 3,
    icon: <FaReact />,
    title: 'React/React Native',
    level: 'Intermedio',
    description: 'Desarrollo de interfaces de usuario y componentes reutilizables para el proyecto CEDAIN con React Native. Implementación de la interfaz de usuario en el Sistema de Juicios en Línea con React.',
  },
  {
    id: 4,
    icon: <FaHtml5 />,
    title: 'HTML/CSS',
    level: 'Intermedio',
    description: 'Diseño y estructuración del frontend de la aplicación MIPE y del Sistema de Juicios en Línea, enfocándome en la accesibilidad y usabilidad.',
  },
  {
    id: 5,
    icon: <FaJava />,
    title: 'Java',
    level: 'Básico',
    description: 'Conocimientos aplicados en tareas de programación en los proyectos MIPE, CEDAIN y el Sistema de Juicios en Línea.',
  },
  {
    id: 6,
    icon: <FaDatabase />,
    title: 'SQL',
    level: 'Básico',
    description: 'Gestión de bases de datos para la aplicación MIPE, el proyecto CEDAIN, y el Sistema de Juicios en Línea, asegurando la integridad y seguridad de los datos.',
  },
  {
    id: 7,
    icon: <FaNodeJs />,
    title: 'Node.js',
    level: 'Intermedio',
    description: 'Desarrollo del backend para el proyecto CEDAIN, creando servicios y API para la interacción con la base de datos y la lógica de negocio.',
  },
];

const SkillCard = ({ icon, title, level, description }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-level">{level}</p>
      <p className="skill-description">{description}</p>
    </div>
  </div>
);

const Skills = () => (
  <div className="skills-section">
    <h2 className="skills-title">Habilidades</h2>
    <div className="skills-container">
      {skills.map(skill => (
        <SkillCard key={skill.id} {...skill} />
      ))}
    </div>
  </div>
);

export default Skills;
