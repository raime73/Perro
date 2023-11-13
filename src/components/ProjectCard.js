import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f7f6;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const dynamicGradient = keyframes`
  0% {
    background-color: #89f7fe;
  }
  50% {
    background-color: #66a6ff;
  }
  100% {
    background-color: #89f7fe;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 35px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 1px solid #e6e6e6;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect fill="none" stroke="%23E6E6E6" stroke-width="4" x="2" y="2" width="296" height="196" rx="27"></rect></svg>');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    background-size: 200% 200%;
    animation: ${gradientAnimation} 3s ease infinite, ${dynamicGradient} 6s ease infinite;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    background-size: 110% 110%;
  }
`;

const Title = styled.h3`
  font-size: 3em;
  font-weight: 900;
  margin-bottom: 30px;
  color: #2a2a2a;
  line-height: 1.2;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.h4`
  font-size: 2em;
  margin-top: 25px;
  margin-bottom: 15px;
  font-weight: 700;
  color: #4a4a4a;
  line-height: 1.3;
  letter-spacing: 0.5px;
`;

const Text = styled.p`
  font-size: 1.5em;
  line-height: 1.8;
  color: #6a6a6a;
  margin-bottom: 25px;
  letter-spacing: 0.3px;
`;

const Section = styled.div`
  margin-top: 2em;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  border-left: 6px solid #66a6ff;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
`;


const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.5em;
  line-height: 1.8;
  &:before {
    content: '• ';
    color: #66a6ff;
    font-weight: bold;
  }
`;



const ProjectCard = ({ 
    title,
    context,
    problemStatement,
    functionalRequirements,
    nonFunctionalRequirements,
    scope,
    riskMatrix,
    migrationPlanning,
    infrastructureMonitoring,
    serviceQualityGuarantee,
    
  }) => {
    const functionalRequirementsList = functionalRequirements.split('\n').filter(req => req.trim() !== '');
    const nonFunctionalRequirementsList = nonFunctionalRequirements.split('\n').filter(req => req.trim() !== '');
  
    return (
      <>
        <GlobalStyle />
        <Card>
          {title && <Title>{title}</Title>}
          {context && (
            <Section>
              <Subtitle>Contexto</Subtitle>
              <Text>{  context="Este proyecto se centra en desarrollar una solución integral para mejorar la eficiencia y la productividad en las operaciones diarias de una empresa. Utilizando tecnologías modernas y prácticas de desarrollo ágil, buscamos crear una plataforma robusta y fácil de usar que atienda las necesidades específicas del cliente, mejorando así su experiencia y satisfacción. El proyecto también pone un fuerte énfasis en la seguridad y la escalabilidad, asegurando que la solución sea sostenible y confiable a largo plazo."
}</Text>
            </Section>
          )}
          {problemStatement && (
            <Section>
              <Subtitle>Declaración del Problema</Subtitle>
              <Text>{  problemStatement="Actualmente, la empresa enfrenta desafíos significativos en términos de eficiencia operativa y satisfacción del cliente, debido a sistemas obsoletos y procesos manuales que resultan en errores frecuentes y pérdida de tiempo. Esto no solo afecta la productividad general, sino que también tiene un impacto negativo en la percepción del cliente acerca de la empresa. El proyecto busca abordar estos problemas implementando una solución tecnológica avanzada que automatice los procesos críticos, reduzca los errores, y mejore la experiencia del usuario final."
}</Text>
            </Section>
          )}
          {functionalRequirements && (
      <Section>
        <Subtitle>Requerimientos Funcionales</Subtitle>
        <UnorderedList>
          {functionalRequirementsList.map((req, index) => (
            <ListItem key={index}>{req}</ListItem>
          ))}
        </UnorderedList>
      </Section>
    )}
    {nonFunctionalRequirements && (
      <Section>
        <Subtitle>Requerimientos No Funcionales</Subtitle>
        <UnorderedList>
          {nonFunctionalRequirementsList.map((req, index) => (
            <ListItem key={index}>{req}</ListItem>
          ))}
        </UnorderedList>
      </Section>
    )}
          {scope && (
            <Section>
              <Subtitle>Alcance</Subtitle>
              <Text>{scope="Este proyecto se centra en el desarrollo de un sistema de gestión de inventario para CEDAIN, con el objetivo de mejorar la eficiencia operativa y la gestión de recursos en sus dos ubicaciones principales. Incluirá funcionalidades para el registro y seguimiento de entradas y salidas, herramientas analíticas para predicciones de stock, y un sistema de alertas para bajo inventario. El sistema será accesible como una aplicación web, garantizando su uso en diversos dispositivos y enfocándose en la seguridad y la usabilidad."}</Text>

            </Section>
          )}
          {riskMatrix && (
            <Section>
              <Subtitle>Matriz de Riesgos</Subtitle>
              <Text>{riskMatrix}</Text>
            </Section>
          )}
          {migrationPlanning && (
            <Section>
              <Subtitle>Planeación de la Migración del Software</Subtitle>
              <Text>{migrationPlanning}</Text>
            </Section>
          )}
          {infrastructureMonitoring && (
            <Section>
              <Subtitle>Monitoreo de la Infraestructura Computacional</Subtitle>
              <Text>{infrastructureMonitoring}</Text>
            </Section>
          )}
          {serviceQualityGuarantee && (
            <Section>
              <Subtitle>Garantía de Calidad de Servicio</Subtitle>
              <Text>{serviceQualityGuarantee}</Text>
            </Section>
          )}
        </Card>
      </>
    );
  }

ProjectCard.propTypes = {
  title: PropTypes.string,
  context: PropTypes.string,
  problemStatement: PropTypes.string,
  functionalRequirements: PropTypes.string,
  nonFunctionalRequirements: PropTypes.string,
  scope: PropTypes.string,
  riskMatrix: PropTypes.string,
  migrationPlanning: PropTypes.string,
  infrastructureMonitoring: PropTypes.string,
  serviceQualityGuarantee: PropTypes.string,

};

export default ProjectCard;