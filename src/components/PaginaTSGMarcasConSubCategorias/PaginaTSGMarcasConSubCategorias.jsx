import React from 'react';
import PropTypes from 'prop-types';
import { JsonLdScript } from '../JsonLdScript';
import { FaqAccordion } from '../FaqAccordion';
import { ClusterMarcas } from '../ClusterMarcas';

const PaginaTSGMarcasConSubCategorias = ({
  jsonLd,
  title,
  brand,
  paragraph1,
  helmetsDataIntegrales,
  similitudesListaIntegrales,
  comparacionRapidaIntegrales,
  helmetsDataAbatibles,
  similitudesListaAbatibles,
  comparacionRapidaAbatibles,
  helmetsDataJet,
  similitudesListaJet,
  comparacionRapidaJet,
  faq,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <JsonLdScript data={jsonLd} />
      <section className="grid">
        <div className="flex justify-center items-center bg-black bg-cover bg-center">
          <div>
            <h1 className="font-bold text-center text-5xl text-white z-0 mt-[200px]">
              {title}
            </h1>
            <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh] flex mx-auto">
              Top Mejores <br />
              Mejores Cascos {brand} del 2023
            </button>
            <p className="text-lg text-white z-0 mt-5 text-justify p-2 lg:w-[40%] mr-2 ml-2 lg:mx-auto">
              {paragraph1}
            </p>
          </div>
        </div>
      </section>
      {/* Body Section */}
      <h2 className="font-bold text-2xl mt-2 text-center">
        Analisis de los Mejores Modelos de Cascos para Moto <u>{brand}</u>
      </h2>
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">
              <a href="#Cascos-Integrales">
                <p>Cascos Integrales</p>
              </a>
            </h3>
          </div>
          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">
              <a href="#Cascos-Abatibles">
                <p>Cascos Abatibles</p>
              </a>
            </h3>
          </div>
          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">
              <a href="#Cascos-Jet">
                <p>Cascos Jet o Abiertos</p>
              </a>
            </h3>
          </div>
        </div>
      </div>
      {helmetsDataIntegrales && (
        <section id="Cascos-Integrales">
          <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
            {/* Comparacion Rapida */}
            <div>
              <h2 className="font-bold text-3xl mt-5 underline">
                Cascos Integrales {brand}
              </h2>
              <div className="flex mt-5">
                {helmetsDataIntegrales.map((models, index) => (
                  <div key={index} className="m-3">
                    <h3 className="text-center text-xs">
                      <img src={models.imageUrl} alt={models.title} />
                      {models.title}
                    </h3>
                  </div>
                ))}
              </div>
              <p className="font-bold text-lg lg:text-xl mt-5">
                Comparación Rápida
              </p>
              <div className="bg-gray-100 p-4 rounded-lg my-2 shadow">
                <p className="font-semibold text-sm lg:text-xl mb-2 underline">
                  Similitudes:
                </p>
                <ul className="list-disc list-inside text-xs lg:text-lg">
                  {similitudesListaIntegrales.map((similitud, index) => (
                    <li key={index}>
                      <strong>{similitud.split(':')[0]}</strong>
                      {similitud.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {comparacionRapidaIntegrales.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg my-2 shadow ">
                    <h4 className="font-semibold text-sm lg:text-xl mb-2 underline">
                      {item.category}:
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.details.map((detail, index) => (
                        <li key={index} className="text-xs lg:text-lg">
                          <span>
                            <strong>{detail.model}</strong>:
                          </span>{' '}
                          {detail.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Analisis Detallado */}
          <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
            <p className="font-bold text-lg lg:text-xl mt-5">
              Analisis detallado
            </p>
            <div className="grid lg:grid-cols-3 justify-center items-center mx-auto w-[90%] mb-2">
              {helmetsDataIntegrales.map((helmet, index) => (
                <div key={index} className="flex">
                  <div className="mt-5 ">
                    <img src={helmet.imageUrl} alt={helmet.title} />
                    <h3 className="font-semibold text-xl lg:text-2xl text-center mt-4 ">
                      {helmet.title}
                    </h3>
                    <p className="text-sm lg:text-lg mt-2 text-center mx-auto">
                      {helmet.description}
                    </p>
                    <ul className="list-disc list-inside mt-2 text-xs lg:text-md mx-2">
                      {helmet.features.map((feature, index) => (
                        <li key={index}>
                          <strong>{feature.split(':')[0]}</strong>
                          {`: ${feature.split(':')[1]}`}
                        </li>
                      ))}
                    </ul>
                    <button className="mx-auto block font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded cursor-pointer px-5 py-3 m-10">
                      Comprar en Amazon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {helmetsDataAbatibles && (
        <section id="Cascos-Abatibles">
          <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
            {/* Comparacion Rapida */}
            <div>
              <h2 className="font-bold text-3xl mt-5 underline">
                Cascos Abatibles {brand}
              </h2>
              <div className="flex mt-5">
                {helmetsDataAbatibles.map((models, index) => (
                  <div key={index} className="m-3">
                    <h3 className="text-center text-xs">
                      <img src={models.imageUrl} alt={models.title} />
                      {models.title}
                    </h3>
                  </div>
                ))}
              </div>
              <p className="font-bold text-lg lg:text-xl mt-5">
                Comparación Rápida
              </p>
              <div className="bg-gray-100 p-4 rounded-lg my-2 shadow">
                <p className="font-semibold text-sm lg:text-xl mb-2 underline">
                  Similitudes:
                </p>
                <ul className="list-disc list-inside text-xs lg:text-lg">
                  {similitudesListaAbatibles.map((similitud, index) => (
                    <li key={index}>
                      <strong>{similitud.split(':')[0]}</strong>
                      {similitud.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {comparacionRapidaAbatibles.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg my-2 shadow ">
                    <h4 className="font-semibold text-sm lg:text-xl mb-2 underline">
                      {item.category}:
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.details.map((detail, index) => (
                        <li key={index} className="text-xs lg:text-lg">
                          <span>
                            <strong>{detail.model}</strong>:
                          </span>{' '}
                          {detail.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Analisis Detallado */}
          <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
            <p className="font-bold text-lg lg:text-xl mt-5">
              Analisis detallado
            </p>
            <div className="grid lg:grid-cols-3 justify-center items-center mx-auto w-[90%] mb-2">
              {helmetsDataAbatibles.map((helmet, index) => (
                <div key={index} className="flex">
                  <div className="mt-5 ">
                    <img src={helmet.imageUrl} alt={helmet.title} />
                    <h3 className="font-semibold text-xl lg:text-2xl text-center mt-4 ">
                      {helmet.title}
                    </h3>
                    <p className="text-sm lg:text-lg mt-2 text-center mx-auto">
                      {helmet.description}
                    </p>
                    <ul className="list-disc list-inside mt-2 text-xs lg:text-md mx-2">
                      {helmet.features.map((feature, index) => (
                        <li key={index}>
                          <strong>{feature.split(':')[0]}</strong>
                          {`: ${feature.split(':')[1]}`}
                        </li>
                      ))}
                    </ul>
                    <button className="mx-auto block font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded cursor-pointer px-5 py-3 m-10">
                      Comprar en Amazon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {helmetsDataJet && (
        <section id="Cascos-Jet">
          <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
            {/* Comparacion Rapida */}
            <div>
              <h2 className="font-bold text-3xl mt-5 underline">
                Cascos Jet {brand}
              </h2>
              <div className="flex mt-5">
                {helmetsDataJet.map((models, index) => (
                  <div key={index} className="m-3">
                    <h3 className="text-center text-xs">
                      <img src={models.imageUrl} alt={models.title} />
                      {models.title}
                    </h3>
                  </div>
                ))}
              </div>
              <p className="font-bold text-lg lg:text-xl mt-5">
                Comparación Rápida
              </p>
              <div className="bg-gray-100 p-4 rounded-lg my-2 shadow">
                <p className="font-semibold text-sm lg:text-xl mb-2 underline">
                  Similitudes:
                </p>
                <ul className="list-disc list-inside text-xs lg:text-lg">
                  {similitudesListaJet.map((similitud, index) => (
                    <li key={index}>
                      <strong>{similitud.split(':')[0]}</strong>
                      {similitud.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {comparacionRapidaJet.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg my-2 shadow ">
                    <h4 className="font-semibold text-sm lg:text-xl mb-2 underline">
                      {item.category}:
                    </h4>
                    <ul className="list-disc list-inside">
                      {item.details.map((detail, index) => (
                        <li key={index} className="text-xs lg:text-lg">
                          <span>
                            <strong>{detail.model}</strong>:
                          </span>{' '}
                          {detail.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Analisis Detallado */}
          <div className="flex flex-col justify-center items-center mx-auto mt-[50px] w-[90%]">
            <p className="font-bold text-lg lg:text-xl mt-5">
              Analisis detallado
            </p>
            <div className="grid lg:grid-cols-3 justify-center items-center mx-auto w-[90%] mb-2">
              {helmetsDataJet.map((helmet, index) => (
                <div key={index} className="flex">
                  <div className="mt-5 ">
                    <img src={helmet.imageUrl} alt={helmet.title} />
                    <h3 className="font-semibold text-xl lg:text-2xl text-center mt-4 ">
                      {helmet.title}
                    </h3>
                    <p className="text-sm lg:text-lg mt-2 text-center mx-auto">
                      {helmet.description}
                    </p>
                    <ul className="list-disc list-inside mt-2 text-xs lg:text-md mx-2">
                      {helmet.features.map((feature, index) => (
                        <li key={index}>
                          <strong>{feature.split(':')[0]}</strong>
                          {`: ${feature.split(':')[1]}`}
                        </li>
                      ))}
                    </ul>
                    <button className="mx-auto block font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded cursor-pointer px-5 py-3 m-10">
                      Comprar en Amazon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* FAQS */}
      <div>
        <FaqAccordion faqData={faq} />
        <div className="flex mx-auto">
          <ClusterMarcas />
        </div>
      </div>
    </div>
  );
};

PaginaTSGMarcasConSubCategorias.propTypes = {};

export default PaginaTSGMarcasConSubCategorias;
