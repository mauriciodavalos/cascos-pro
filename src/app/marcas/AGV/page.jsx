import { ClusterMarcas } from '@/components/ClusterMarcas';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLdScript } from '@/components/JsonLdScript';

export const metadata = {
  title: 'Cascos para Moto AGV',
  description: 'Analisis y Comparacion de los mejores modelos de Cascos AGV',
};

const Page = () => {
  const brand = 'AGV';
  const title = `Cascos para Moto ${brand}`;
  const paragraph1 =
    'Con sus raíces en Italia, AGV se mantiene firme en su compromiso con la calidad y la innovación, produciendo cascos que no solo son seguros sino también estilizados y aerodinámicos. ';
  const paragraph2 = `Siendo una elección preferida entre los corredores profesionales y entusiastas del motociclismo.`;

  const helmetsDataIntegrales = [
    {
      title: 'PISTA GP RR',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/fc82b207-571c-48d2-a3b7-6c885a264b69/ramfdh/std/615x615/pista-gp-rr-e2206-dot-mono-matt-carbon.jpg?format=auto',
      description:
        'Un casco premium diseñado para la máxima seguridad y rendimiento en pista.',
      features: [
        'Calotas y EPS: 4 tallas de calota y EPS de 5 densidades',
        'Ventilación: 2 extractores traseros y 5 aberturas delanteras',
        'Sistema de Retención: Titanio Double D',
        'Peso: 1450 g',
        'Material de la Calota: 100% Fibra de carbono',
      ],
    },
    {
      title: 'K6 S',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/d6967c89-2249-4e45-97aa-806defe01141/ramfdh/std/615x615/k6-s-e2206-hyphen-black-red-white.jpg?format=auto',
      description:
        'Casco versátil, optimizado para todas las posiciones de conducción.',
      features: [
        'Calotas y EPS: 4 tallas de calota y EPS de 5 densidades',
        'Ventilación: 1 extractor trasero y 5 aberturas delanteras',
        'Sistema de Retención: Double D',
        'Peso: 1255 g',
        'Material de la Calota: Fibra de aramida',
      ],
    },
    {
      title: 'K5 S',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/d7324a33-257d-4d08-bf22-95825f641a0d/ramfdh/std/615x615/k5-s-agv-e2205-top-mplk-apex-46.jpg?format=auto',
      description:
        'Casco con características de alta gama a un precio más accesible.',
      features: [
        'Calotas y EPS: 2 tallas de calota y EPS de 4 densidades',
        'Ventilación: 2 extractores traseros y 5 aberturas delanteras',
        'Sistema de Retención: Double D',
        'Peso: 1390 g',
        'Material de la Calota: Carbono y fibra de vidrio',
      ],
    },
    {
      title: 'K3',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/3384dcc8-0371-46ec-ad8a-09b40fa747c8/ramfdh/std/615x615/k3-e2206-mono-seta-white.jpg?format=auto',
      description:
        'Orientado al usuario promedio que busca rendimiento y confort.',
      features: [
        'Calotas y EPS: 3 tallas de calota y EPS multidensidad',
        'Ventilación: 1 extractor trasero y 4 aberturas delanteras',
        'Sistema de Retención: Cierre micrométrico',
        'Peso: 1500 g',
        'Material de la Calota: Termoplástico de alta resistencia',
      ],
    },
    {
      title: 'K1 S',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/2b083297-fbc3-47ab-8371-6da661d36eb4/ramfdh/std/615x615/k1-s-e2206-kripton-black-orange.jpg?format=auto',
      description:
        'Diseñado para los ciclistas que buscan un casco asequible sin sacrificar calidad.',
      features: [
        'Calotas y EPS: 2 tallas de calota y EPS de 4 densidades',
        'Ventilación: 2 extractores traseros y 5 aberturas delanteras',
        'Sistema de Retención: Double D',
        'Peso: 1500 g',
        'Material de la Calota: Termoplástico de alta resistencia',
      ],
    },
  ];
  const similitudesListaIntegrales = [
    'Ventilación: Todos los modelos tienen múltiples aberturas de ventilación delanteras y extractores traseros.',
    'Sistema de Retención: La mayoría utiliza un sistema de retención de doble anilla ("Double D").',
    'Visibilidad: Todos ofrecen 190° de visibilidad horizontal y están tratados contra arañazos',
    'Perfil para la seguridad de la clavícula: Presente en todos los modelos.',
    'Interior extraíble y lavable: Común en todos los modelos',
  ];
  const comparacionRapidaIntegrales = [
    {
      category: 'Material de la Calota',
      details: [
        { model: 'PISTA GP RR', description: '100% Fibra de carbono' },
        { model: 'K6 S', description: 'Fibra de aramida' },
        { model: 'K% S', description: 'Carbono y fibra de vidrio' },
        { model: 'K3', description: 'Termoplástico de alta resistencia' },
        { model: 'K1 S', description: 'Termoplástico de alta resistencia' },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        { model: 'PISTA GP RR', description: 'Titanio Double D' },
        { model: 'K6 S', description: 'Double D' },
        { model: 'K% S', description: 'Double D' },
        { model: 'K3', description: 'Cierre micrométrico' },
        { model: 'K1 S', description: 'Double D' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        {
          model: 'PISTA GP RR',
          description: '2 extractores traseros, 5 delanteras',
        },
        { model: 'K6 S', description: '1 extractor trasero, 5 delanteras' },
        { model: 'K% S', description: '2 extractores traseros, 5 delanteras' },
        { model: 'K3', description: '1 extractor trasero, 4 delanteras' },
        { model: 'K1 S', description: '2 extractores traseros, 5 delanteras' },
      ],
    },
    {
      category: 'Peso',
      details: [
        { model: 'PISTA GP RR', description: '1450 g' },
        { model: 'K6 S', description: '1255 g' },
        { model: 'K% S', description: '1390 g' },
        { model: 'K3', description: '1500 g' },
        { model: 'K1 S', description: '1500 g' },
      ],
    },
  ];

  const helmetsDataAbatibles = [
    {
      title: 'SPORTMODULAR',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/45f5bad3-9b48-4ca5-bc61-d91c42198080/ramfdh/std/615x615/sportmodular-agv-e05-multi-mplk-overlay-matt-double-grey.jpg?format=auto',
      description:
        'Casco modular de alto rendimiento con una calota 100% de fibra de carbono.',
      features: [
        'Calotas y EPS: 3 tallas de calota y EPS de 5 densidades',
        'Ventilación: 1 extractor trasero y 2 aberturas delanteras',
        'Sistema de Retención: Titanio Double D',
        'Peso: 1295 g',
        'Material de la Calota: 100% Fibra de carbono',
      ],
    },
    {
      title: 'TOUMODULAR',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/477fefeb-e8db-443d-a7ac-2a8ffa0ed55e/ramfdh/std/615x615/tourmodular-ece2206-mono-matt-black.jpg?format=auto',
      description:
        'Casco modular versátil con características como DrySpeed y inserciones reflectantes.',
      features: [
        'Calotas y EPS: 3 tallas de calota y EPS de 5 densidades',
        'Ventilación: 1 extractor trasero y 4 aberturas delanteras',
        'Sistema de Retención: Cierre micrométrico',
        'Peso: 1620 g',
        'Material de la Calota: Carbono, fibra aramídica y fibra de vidrio',
      ],
    },
  ];
  const similitudesListaAbatibles = [
    'Aerodinámica: Ambos cascos tienen una calota diseñada para optimizar la aerodinámica y ofrecer un peso dinámico cero a 130 km/h.',
    'Interior: Ambos cascos utilizan tejido Ritmo y Shalimar para el acolchado y son compatibles con el uso de gafas. Además, los dos tienen un interior extraíble y lavable.',
    'Calota: Los dos cascos ofrecen 3 tamaños de concha y EPS de 5 densidades.',
    'Ventilación: Ambos tienen al menos un extractor trasero y múltiples aberturas de ventilación delanteras.',
    'Visera: Ambos modelos vienen con una visera Max Vision Pinlock (120) y ofrecen 190° de visibilidad horizontal y 85° de visibilidad vertical. También son antiarañazos.',
    'Accesorios: Protector de nariz y protector antiviento desmontables en ambos modelos.',
  ];
  const comparacionRapidaAbatibles = [
    {
      category: 'Material de la Calota',
      details: [
        { model: 'SPORTMODULAR', description: '100% Fibra de carbono' },
        {
          model: 'TOUMODULAR',
          description: 'Carbono, fibra aramídica y fibra de vidrio',
        },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        { model: 'SPORTMODULAR', description: 'Titanio Double D' },
        { model: 'TOUMODULAR', description: 'Cierre micrométrico' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        {
          model: 'SPORTMODULAR',
          description: '1 extractor trasero, 2 delanteras',
        },
        {
          model: 'TOUMODULAR',
          description: '1 extractor trasero, 4 delanteras',
        },
      ],
    },
    {
      category: 'Peso',
      details: [
        { model: 'SPORTMODULAR', description: '1295 g' },
        { model: 'TOUMODULAR', description: '1620 g' },
      ],
    },
  ];

  const helmetsDataJet = [
    {
      title: 'X7 MONO',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/eff8fa05-e332-47d4-9f3d-439b44f15ecc/ramfdh/std/615x615/x70-mono-e2205-black.jpg?format=auto',
      description:
        'Casco con interior de similpiel y varias características premium.',
      features: [
        'Calotas y EPS: 3 tamaños de concha, EPS desarrollado en 3 tallas',
        'Ventilación: Sin especificar',
        'Sistema de Retención: Double D',
        'Peso: 870 g',
        'Material de la Calota: Fibra de vidrio',
      ],
    },
    {
      title: 'ORBYT',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/c903fd5b-8eb9-47e5-a42c-da255337ffea/ramfdh/std/615x615/orbyt-e2205-multi-block-pearl-white-ebony-red-fl.jpg?format=auto',
      description: 'Casco diseñado para versatilidad y comodidad.',
      features: [
        'Calotas y EPS: 2 tamaños de concha, EPS de 3 densidades desarrollado en 2 tallas',
        'Ventilación: 1 abertura de ventilación delantera',
        'Sistema de Retención: Micrométrico',
        'Peso: 1280 g',
        'Material de la Calota: Termoplástico de alta resistencia',
      ],
    },
    {
      title: 'K-5 JET',
      imageUrl:
        'https://dainese-cdn.thron.com/delivery/public/image/dainese/8894cd09-7948-4e44-b499-99eeff67826b/ramfdh/std/615x615/k-5-jet-e2205-mono-matt-black.jpg?format=auto',
      description: 'Casco aerodinámico con un alerón integrado.',
      features: [
        'Calotas y EPS: 2 tamaños de concha, EPS de 3 densidades desarrollado en 4 tallas',
        'Ventilación: 2 extractores traseros, 3 aberturas de ventilación delanteras',
        'Sistema de Retención: Micrométrico',
        'Peso: 1350 g',
        'Material de la Calota: Carbono y fibra de vidrio',
      ],
    },
  ];
  const similitudesListaJet = [
    'Interior: Todos los cascos tienen un interior extraíble y lavable.',
    'Sistema de Retención: ORBYT y K-5 JET usan un sistema de retención micrométrico.',
    'Calota: ORBYT y K-5 JET ofrecen 2 tamaños de concha.',
    'Ventilación: Todos tienen al menos una abertura de ventilación delantera.',
    'Peso: Todos los modelos son relativamente ligeros, aunque varían en peso específico.',
    'Visera: ORBYT y K-5 JET cuentan con una visera antiarañazos.',
  ];
  const comparacionRapidaJet = [
    {
      category: 'Material de la Calota',
      details: [
        { model: 'X7 MONO', description: 'Fibra de vidrio' },
        { model: 'ORBYT', description: 'Termoplástico de alta resistencia' },
        { model: 'K-5 JET', description: 'Carbono y fibra de vidrio' },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        { model: 'X7 MONO', description: 'Double D' },
        { model: 'ORBYT', description: 'Micrométrico' },
        { model: 'K-5 JET', description: 'Micrométrico' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        { model: 'X7 MONO', description: 'Sin especificar' },
        { model: 'ORBYT', description: '1 abertura delantera' },
        {
          model: 'K-5 JET',
          description: '2 extractores traseros, 3 delanteras',
        },
      ],
    },
    {
      category: 'Peso',
      details: [
        { model: 'X7 MONO', description: '870 g' },
        { model: 'ORBYT', description: '1280 g' },
        { model: 'K-5 JET', description: '1350 g' },
      ],
    },
  ];

  const faq = [
    {
      '@type': 'Question',
      name: '¿Por qué la marca Fox es tan reconocida en los cascos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La marca tiene unos diseños increibles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué la marca Fox es tan reconocida en los cascos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La marca tiene unos diseños increibles.',
      },
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: title,
      image: [
        'https://www.foxracing.com.mx/cdn/shop/files/29657-002_1800x1800.jpg?v=1693537351',
        'https://www.foxracing.com.mx/cdn/shop/files/28033-110_1800x1800.jpg?v=1690935396',
        'https://www.foxracing.com.mx/cdn/shop/files/30874-018_1800x1800.jpg?v=1696227638',
      ],
      datePublished: Date.now(),
      dateModified: Date.now(),
      author: [
        {
          '@type': 'Person',
          name: 'Mauricio Dávalos',
          url: 'https://cascospro-moto.com/#organization',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq,
    },
  ];

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

export default Page;
