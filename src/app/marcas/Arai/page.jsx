import { PaginaTSGMarcasConSubCategorias } from '@/components/PaginaTSGMarcasConSubCategorias';

/** @type {NextPage} */
const Page = () => {
  const brand = 'Arai';
  const title = `Cascos para Moto ${brand}`;
  const paragraph1 =
    'Con sus raíces en Italia, AGV se mantiene firme en su compromiso con la calidad y la innovación, produciendo cascos que no solo son seguros sino también estilizados y aerodinámicos. ';

  const helmetsDataIntegrales = [
    {
      title: 'X-804 ULTRA CARBON',
      description:
        'Casco integral de alto rendimiento con orientación para carreras.',
      features: [
        'Tipo de casco: Nolan - Integral',
        'Retention system: Anillos en D dobles',
        'Outer shell material: Fibra de carbón',
        'Ventilation: RAF Racing Air Flow',
        'Number of outer shell: 4',
        'Comfort Type: Acolchado interior "Carbon Fitting" extraíble',
      ],
    },
    {
      title: 'X-903 ULTRA CARBON',
      description:
        'Casco integral versátil con características adicionales como sistema de comunicación.',
      features: [
        'Tipo de casco: Nolan - Integral',
        'Retention system: Anillos en D dobles',
        'Outer shell material: Fibra de carbón',
        'Ventilation: Extractores de aire, ventilación mentonera, ventilación superior',
        'Number of outer shell: 3',
        'Comfort Type: Acolchado interior "Carbon Fitting" extraíble',
      ],
    },
    {
      title: 'N80-8',
      description:
        'Casco integral con tecnología Airbooster y sistema de comunicación N-Com.',
      features: [
        'Tipo de casco: Nolan - Integral',
        'Retention system: Microbloqueo2',
        'Outer shell material: Policarbonato Lexan™',
        'Ventilation: Airbooster Technology',
        'Number of outer shell: 2',
        'Comfort Type: Acolchado interior "Clima Comfort Top" extraíble',
      ],
    },
    {
      title: 'N60-6 SPORT',
      description:
        'Casco integral con enfoque en el deporte y tecnología Airbooster.',
      features: [
        'Tipo de casco: Nolan - Integral',
        'Retention system: Microbloqueo',
        'Outer shell material: Policarbonato Lexan™',
        'Ventilation: Airbooster Technology',
        'Number of outer shell: 2',
        'Comfort Type: Acolchado interior "Clima Comfort" extraíble',
      ],
    },
  ];
  const similitudesListaIntegrales = [
    'Tipo de casco: Todos son cascos integrales de la marca Nolan.',
    'Universo: Todos los cascos son Full-Face.',
    'ECE Homologation type: Todos tienen Homologación P.',
    'Outer shell material: Todos tienen materiales de alta calidad, como fibra de carbón o Policarbonato Lexan™.',
    'Ventilation: Todos los modelos cuentan con distintas formas de ventilación superior y ventilación mentonera.',
    'Retention system: La mayoría utiliza Anillos en D dobles o Microbloqueo.',
    'Comfort Type: Todos los modelos tienen acolchado interior extraíble.',
    'Safety product: Todos cuentan con Nolan Emergency Release System (NERS).',
    'Other features: Todos incluyen una bolsa para el casco.',
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
      <PaginaTSGMarcasConSubCategorias
        jsonLd={jsonLd}
        title={title}
        brand={brand}
        paragraph1={paragraph1}
        helmetsDataIntegrales={helmetsDataIntegrales}
        similitudesListaIntegrales={similitudesListaIntegrales}
        comparacionRapidaIntegrales={comparacionRapidaIntegrales}
        helmetsDataAbatibles={helmetsDataAbatibles}
        similitudesListaAbatibles={similitudesListaAbatibles}
        comparacionRapidaAbatibles={comparacionRapidaAbatibles}
        helmetsDataJet={helmetsDataJet}
        similitudesListaJet={similitudesListaJet}
        comparacionRapidaJet={comparacionRapidaJet}
        faq={faq}
      />
    </div>
  );
};

export default Page;
