import React from 'react';
import PropTypes from 'prop-types';
import { ClusterMarcas } from '@/components/ClusterMarcas';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLdScript } from '@/components/JsonLdScript';

const PaginaTSGMarcasSinSubCategorias = ({
  jsonLd,
  title,
  paragraph1,
  paragraph2,
  brand,
  helmetsData,
  similitudesLista,
  comparacionRapida,
  faq,
}) => {
  return (
    <div>
      <JsonLdScript data={jsonLd} />
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center mx-auto mt-[110px] w-[90%]">
        <h1 className="font-bold text-center text-5xl">{title}</h1>
        <div className="font-semibold text-lg mt-3 z-0 sm:text-left p-2">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
      </div>
      {/* Body Section */}
      <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
        <h1 className="font-bold text-3xl mt-5 ">
          Analisis de los Top Mejores Modelos de Cascos para Moto <u>{brand}</u>
        </h1>
        {/* Comparacion Rapida */}
        <div>
          <div className="flex mt-5">
            {helmetsData.map((models, index) => (
              <div key={index} className="m-3">
                <p className="text-center text-sm">
                  <img src={models.imageUrl} alt={models.title} />
                  {models.title}
                </p>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-2xl mt-5">Comparación Rápida</h3>
          <div className="bg-gray-100 p-4 rounded-lg my-2 shadow">
            <h4 className="font-semibold text-lg mb-2">Similitudes:</h4>
            <ul className="list-disc list-inside">
              {similitudesLista.map((similitud, index) => (
                <li key={index}>{similitud}</li>
              ))}
            </ul>
          </div>
          {comparacionRapida.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg my-2 shadow">
              <h4 className="font-semibold text-lg mb-2">{item.category}:</h4>
              <ul className="list-disc list-inside">
                {item.details.map((detail, index) => (
                  <li key={index} className="text-base">
                    <span className="font-medium">{detail.model}:</span>{' '}
                    {detail.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Analisis Detallado */}
      <div className=" justify-center items-center mx-auto mt-[50px] w-[90%] mb-2">
        <h3 className="font-bold text-2xl mt-5 text-center">
          Analisis detallado
        </h3>
        {helmetsData.map((helmet, index) => (
          <div key={index} className="flex">
            <div className="border mt-5 lg:w-[50%] mx-auto">
              <img src={helmet.imageUrl} alt={helmet.title} />
              <h3 className="font-semibold text-2xl text-center mt-4 ">
                {helmet.title}
              </h3>
              <p className="text-lg mt-2 text-center">{helmet.description}</p>
              <ul className="list-disc list-inside mt-2 text-lg ml-4">
                {helmet.features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.split(':')[0]}</strong>
                    {`: ${feature.split(':')[1]}`}
                  </li>
                ))}
              </ul>
              <button className="mx-auto block font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded cursor-pointer px-10 py-6 m-10">
                Comprar en Amazon
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* FAQS */}
      <div>
        <FaqAccordion faqData={faq} />
        <ClusterMarcas />
      </div>
    </div>
  );
};

PaginaTSGMarcasSinSubCategorias.propTypes = {};

export default PaginaTSGMarcasSinSubCategorias;
