import { ClusterMarcas } from '@/components/ClusterMarcas';
import { FaqAccordion } from '@/components/FaqAccordion';
import { JsonLdScript } from '@/components/JsonLdScript';

export const metadata = {
  title: 'Cascos para Moto Marca Fox | Cascos Pro Moto',
  description:
    'FOX® es la marca lider en Cascos para Motocross. Encuentra aqui las mejores reseñas, comparaciones y analisis de todo su catalogo',
};

const Page = () => {
  const brand = 'Fox Racing';
  const paragraph1 = ` Fox Racing se mantiene como una marca de referencia en el mundo del
  motocross.`;
  const paragraph2 = `Aqui tienes un analisis de los Cascos para Motocross Fox Racing.`;

  const title = `Cascos para Motocross ${brand}`;
  const subtitle = `Descubre la variedad de modelos de cascos para motocross Fox`;

  const helmetsData = [
    {
      title: 'CASCO FOX V1',
      imageUrl:
        'https://www.foxracing.com.mx/cdn/shop/files/29657-002_1800x1800.jpg?v=1693537351',
      description:
        'Es presentado como una opción competitiva y versátil en el segmento básico.',
      features: [
        'Calotas y EPS: Ofrece 4 tallas de calota y 6 de EPS',
        'Ventilación: 7 conductos de entrada y 4 de salida',
        'Visera: Regulable con tornillos.',
        'Construcción de la calota: ABS y policarbonato moldeada por inyección.',
      ],
    },
    {
      title: 'CASCO FOX V2',
      imageUrl:
        'https://www.foxracing.com.mx/cdn/shop/files/28033-110_1800x1800.jpg?v=1690935396',
      description:
        'Se destaca por establecer un estándar en los cascos de nivel medio con características de nivel profesional y nueva tecnología de seguridad.',
      features: [
        'Calotas y EPS: 4 tallas de calota y 5 de EPS.',
        'Ventilación: 11 conductos de entrada y 4 de salida.',
        'Barra de mentón: De EPP/PU para gestionar la energía el impacto y mantener bajo el peso.',
        'Forro: XT2®, que es antimicrobiano y controla tanto el olor como la absorción de la humedad.',
        'Construcción de la calota: ABS y policarbonato moldeada por inyección.',
        'MVRS ™: Introduce el sistema de liberación de visera magnética (MVRS™), diseñado para liberarse durante un choque',
      ],
    },
    {
      title: 'CASCO FOX V3',
      imageUrl:
        'https://www.foxracing.com.mx/cdn/shop/files/30874-018_1800x1800.jpg?v=1696227638',
      description:
        'Se le considera tecnológicamente avanzado, repleto de características de siguiente nivel y orientado a motociclistas profesionales',
      features: [
        'Calotas y EPS: 4 tallas de calota y EPS. Emplea la tecnología MCT (Multi Composite Technology), combinando resinas de carbono y FRP.',
        'Ventilación: Rejillas de ventilación de malla inyectada para superior ventilación y protección contra suciedad.',
        'Barra de mentón: De EPP/PU para gestionar la energía del impacto y mantener bajo el peso.',
        'Forro: XT2®, que es antimicrobiano y controla tanto el olor como la absorción de la humedad.',
        'Construcción de la calota: ABS y policarbonato moldeada por inyección.',
        'MVRS ™: Introduce el sistema de liberación de visera magnética (MVRS™), diseñado para liberarse durante un choque',
        'Almohadillas para las mejillas: Incluyen una función de liberación de emergencia.',
        'Anillos: En D de fibra de carbono.',
      ],
    },
  ];
  const imageUrl1 =
    'https://www.foxracing.com.mx/cdn/shop/files/29657-002_1800x1800.jpg?v=1693537351';
  const imageUrl2 =
    'https://www.foxracing.com.mx/cdn/shop/files/28033-110_1800x1800.jpg?v=1690935396';
  const imageUrl3 =
    'https://www.foxracing.com.mx/cdn/shop/files/30874-018_1800x1800.jpg?v=1696227638';

  const similitudesLista = [
    'Equipados con el sistema MIPS®.',
    'Revestimientos de EPS de doble densidad.',
    'Cumplen con normativas relevantes (DOT y/o ECE 22.05).',
    'Ideales para Motocross',
  ];

  const comparacionRapida = [
    {
      category: 'Construcción',
      details: [
        { model: 'V1', description: 'ABS/policarbonato' },
        { model: 'V2', description: 'ABS/PC' },
        { model: 'V3', description: 'MCT (Carbono/FRP)' },
      ],
    },
    {
      category: 'Sistema de Visera',
      details: [
        { model: 'V1', description: 'Regulable con tornillos' },
        { model: 'V2', description: 'MVRS™ (Liberación magnética)' },
        {
          model: 'V3',
          description: 'MVRS™ (Imán de poste central y tornillos laterales)',
        },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        { model: 'V1', description: '7 entradas/4 salidas' },
        { model: 'V2', description: '11 entradas/4 salidas' },
        { model: 'V3', description: 'Rejillas de malla inyectada' },
      ],
    },
    {
      category: 'Forro',
      details: [
        { model: 'V1', description: 'Estándar desmontable/lavable' },
        { model: 'V2', description: 'XT2® antimicrobiano' },
        { model: 'V3', description: 'X-Static®' },
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
    <div className="flex flex-col justify-center items-center mx-auto mt-[110px] w-[90%]">
      <JsonLdScript data={jsonLd} />
      <h1 className="font-bold text-center text-5xl">{title}</h1>
      <div className="font-semibold text-lg mt-3 z-0 sm:text-left p-2">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
      <h1 className="font-bold text-3xl mt-5 text-center">
        Analisis de los Top Mejores Modelos de Cascos {brand}
      </h1>
      <h3 className="font-bold text-2xl mt-5">Comparación Rápida</h3>
      <div className="bg-gray-100 p-4 rounded-lg my-2 shadow w-[80%] lg:w-[50%]">
        <h4 className="font-semibold text-lg mb-2">Similitudes:</h4>
        <ul>
          {similitudesLista.map((similitud, index) => (
            <li key={index}>{similitud}</li>
          ))}
        </ul>
      </div>
      {comparacionRapida.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-100 p-4 rounded-lg my-2 shadow w-[80%] lg:w-[50%]">
          <h4 className="font-semibold text-lg mb-2">{item.category}:</h4>
          <ul className="list-disc list-inside">
            {item.details.map((detail, idx) => (
              <li key={idx} className="text-base">
                <span className="font-medium">{detail.model}:</span>{' '}
                {detail.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h3 className="font-bold text-2xl mt-5">Analisis detallado</h3>
      {helmetsData.map((helmet, idx) => (
        <div key={idx} className="border mx-auto mt-5 ">
          <img src={helmet.imageUrl} alt={helmet.title} />
          <h3 className="font-semibold text-2xl text-center mt-4 ">
            {helmet.title}
          </h3>
          <p className="text-lg mt-2 text-center">{helmet.description}</p>
          <ul className="list-disc list-inside mt-2 text-lg ml-4">
            {helmet.features.map((feature, fIdx) => (
              <li key={fIdx}>
                <strong>{feature.split(':')[0]}</strong>
                {`: ${feature.split(':')[1]}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <FaqAccordion faqData={faq} />
      </div>
    </div>
  );
};

export default Page;
