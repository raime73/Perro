import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  const project = {
    title: "Mi Portafolio",
    context: "Este es un pequeño resumen de mi portafolio profesional y personal.",
    problemStatement: "Necesito una manera efectiva de mostrar mi experiencia y habilidades a posibles empleadores y clientes.",
    functionalRequirements: `
      - Página de inicio con información personal y profesional.
      - Sección de proyectos que muestra una lista de proyectos con descripciones.
      - Sección de habilidades que muestra las tecnologías y herramientas que dominas.
      - Sección de educación que muestra tu formación académica.
      - Sección de experiencia laboral que muestra tu historial de empleo.
      - Formulario de contacto para que los visitantes puedan enviarte mensajes.
    `,
    nonFunctionalRequirements: `
      - La página debe cargar en menos de 3 segundos.
      - Diseño responsivo para adaptarse a dispositivos móviles y tabletas.
      - Implementación de prácticas de SEO para mejorar la visibilidad en motores de búsqueda.
      - Alta disponibilidad y tiempos de carga consistentes incluso bajo tráfico elevado.
      - Seguridad para proteger la información personal y prevenir ataques comunes.
    `,
    scope: "Descripción del alcance del proyecto.",
    riskMatrix: "Descripción de la matriz de riesgos del proyecto.",
    migrationPlanning: "Detalles sobre la planeación de la migración del software.",
    infrastructureMonitoring: "Información sobre el monitoreo de la infraestructura computacional.",
    serviceQualityGuarantee: "Detalles sobre la garantía de calidad de servicio."
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <h1>Proyectos</h1>
      <ProjectCard {...project} />
    </div>
  );
}

export default Projects;
