'use client';

import React from 'react';
import PropTypes from 'prop-types';

const TopCascos = ({}) => {
  const helmets = [
    {
      name: 'SHOEI - X-FIFTEEN',
      features: [
        'Aerodinámica optimizada',
        'Sistema de almohadillado central ajustable',
        'EPS de múltiple densidad con ventilación mejorada',
        'Sistema de liberación rápida de emergencia (E.Q.R.S.)',
        'Compatible con sistema de hidratación en la barra de la barbilla',
      ],
      safetyStandards: 'DOT, Snell, ECE R22/06',
    },
    {
      name: 'AGV - Pista GP RR',
      features: [
        'Diseñado para la MotoGP™',
        'Calota de 100% fibra de carbono',
        'Visión panorámica de 190° y vertical de 85°',
        'Sistema Adaptive Fit de 360° para ajuste personalizado',
      ],
      safetyStandards: 'Homologación FIM y ECE22.06',
      accessories:
        'Sistema de hidratación, kit de personalización del interior, kit de pantalla despegable, cubiertas para aberturas de ventilación',
    },
    {
      name: 'SCHUBERTH - C5 MASTER',
      features: [
        'Carcasa exterior de fibra de vidrio reforzada con fibra de carbono',
        'Espuma EPS especial para absorción de impactos',
        'Pads interiores de tejido Coolmax®, hipoalergénicos, antibacterianos, extraíbles y lavables',
      ],
      safetyStandards: 'Doble homologación: P/J y ECE-R 22.06',
      accessories: 'Pinlock (anti-empañante)',
    },
    {
      name: 'NOLAN - X-804 RS ULTRA CARBON',
      features: [
        'Fibra de carbono',
        'Sistema de ventilación RAF Racing Air Flow',
        'Acolchado interior "Carbon Fitting" extraíble',
        'Sistema de liberación de emergencia avanzado NERS',
      ],
      safetyStandards: 'Homologación ECE',
    },
    {
      name: 'SHARK - RACE-R PRO GP FIM',
      features: [
        'Calota en estructura reforzada COVA RS',
        'Estructura 100% Carbono Aramida',
        'Pantalla de alta resistencia de clase óptica 1',
        'Interior textil «Alveotech» con sello Sanitized®',
      ],
      safetyStandards: 'Certificacion FIM',
      objectives:
        'Aislamiento acústico, minimización de turbulencias, adaptabilidad a condiciones meteorológicas diversas',
    },
  ];

  return (
    <div className="container mx-auto p-4 ">
      <ul>
        {helmets.map((helmet, index) => (
          <li key={index} className="border mt-5 lg:w-[50%] mx-auto">
            <h2 className="font-semibold text-2xl text-center mt-4 ">
              {helmet.name}
            </h2>
            <p className="text-lg mt-2 text-center">
              Características Principales:
            </p>
            <ul className="list-disc list-inside mt-2 text-lg ml-4">
              {helmet.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {helmet.accessories && (
              <p className="mt-2 text-lg ml-4">
                <strong>Accesorios Incluidos:</strong> {helmet.accessories}
              </p>
            )}
            <p className="mt-2 text-lg ml-4">
              <strong>Estándares de Seguridad:</strong> {helmet.safetyStandards}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

TopCascos.propTypes = {};

export default TopCascos;
