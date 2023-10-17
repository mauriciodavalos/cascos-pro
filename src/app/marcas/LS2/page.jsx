import { PaginaTSGMarcasConSubCategorias } from '@/components/PaginaTSGMarcasConSubCategorias';

/** @type {NextPage} */
const Page = () => {
  const brand = 'LS2';
  const title = `Cascos para Moto ${brand}`;
  const paragraph1 =
    'Con sus raíces en Italia, AGV se mantiene firme en su compromiso con la calidad y la innovación, produciendo cascos que no solo son seguros sino también estilizados y aerodinámicos. ';

  const helmetsDataIntegrales = [
    {
      title: 'THUNDER GP PRO',
      imageUrl:
        'https://ls2helmets.com/images/products/168055211/grey/168055211img_web800.avif',
      description:
        'El casco de competición que utilizan los pilotos de LS2 con homologación FIM.',
      features: [
        'Material: Carbono',
        'Peso: 1280 (±50 gr.)',
        'Homologación FIM',
        'Sistema de liberación de emergencia',
        "Doble anillo en forma de 'D'",
        'Ventilación en barbilla y secciones delantera y superior',
        'Forro de tejido plateado X-Static©',
        'Pinlock® 120 MaxVision™ Incluido',
      ],
    },

    {
      title: 'VECTOR II CARBON',
      imageUrl:
        'https://ls2helmets.com/images/products/168115099/grey/168115099img_web800.avif',
      description:
        'Casco deportivo con diseño moderno para disfrutar tanto en carretera como en ciudad.',
      features: [
        'Material: Carbono',
        'Peso: 1300 (±50 gr.)',
        'Sistema de liberación de emergencia',
        'Hebilla de metal micrométrica',
        'Ventilación en barbilla y sección superior',
        'Forro de tejido plateado X-Static©',
        'Pinlock® 120 MaxVision™ Incluido',
      ],
    },
    {
      title: 'STORM II',
      imageUrl:
        'https://ls2helmets.com/images/products/168001011/grey/168001011img_web800.avif',
      description: 'Casco touring para disfrutar en ciudad o en carretera.',
      features: [
        'Material: KPA',
        'Peso: 1530 (±50 gr.)',
        'Hebilla micrométrica',
        'Ventilación en barbilla y sección superior',
        'Extraíble y lavable',
        'Pinlock® 70 MaxVision™ Incluido',
      ],
    },
    {
      title: 'RAPID II',
      imageUrl:
        'https://ls2helmets.com/images/products/163531011/grey/163531011img_web800.jpg',
      description: 'Casco urban-touring con un diseño elegante y funcional.',
      features: [
        'Material: HPTT',
        'Peso: 1300 (±50 gr.)',
        'Hebilla micrométrica',
        'Ventilación en barbilla y sección superior',
        'Extraíble y lavable',
        'Preparada para sistema Pinlock® 70 MaxVision™',
      ],
    },
  ];
  const similitudesListaIntegrales = [
    'ECE Homologation type: ECE 22.06.',
    'Sistema de liberación de emergencia',
    'Ventilación en barbilla y sección superior',
    'Extraíble y lavable',
    'Pinlock® MaxVision™ Incluido',
  ];
  const comparacionRapidaIntegrales = [
    {
      category: 'Material de la Calota',
      details: [
        { model: 'THUNDER GP PRO', description: 'Carbono' },
        { model: 'VECTOR II CARBON', description: 'Carbono' },
        { model: 'STORM II', description: 'KPA' },
        { model: 'RAPID II', description: 'HPTT' },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        {
          model: 'THUNDER GP PRO',
          description: "Doble anillo en forma de 'D'",
        },
        {
          model: 'VECTOR II CARBON',
          description: 'Hebilla de metal micrométrica',
        },
        { model: 'STORM II', description: 'Hebilla micrométrica' },
        { model: 'RAPID II', description: 'Hebilla micrométrica' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        {
          model: 'THUNDER GP PRO',
          description: 'Barbilla y secciones delantera y superior',
        },
        {
          model: 'VECTOR II CARBON',
          description: 'Barbilla y sección superior',
        },
        { model: 'STORM II', description: 'Barbilla y sección superior' },
        { model: 'RAPID II', description: 'Barbilla y sección superior' },
      ],
    },
    {
      category: 'Peso',
      details: [
        { model: 'THUNDER GP PRO', description: '1280 (±50 gr.)' },
        { model: 'VECTOR II CARBON', description: '1300 (±50 gr.)' },
        { model: 'STORM II', description: '1530 (±50 gr.)' },
        { model: 'RAPID II', description: '1300 (±50 gr.)' },
      ],
    },
  ];

  const helmetsDataAbatibles = [
    {
      title: 'ADVANT X CARBON',
      imageUrl:
        'https://ls2helmets.com/images/products/569017099/grey/569017099img_left800.avif',
      description:
        'Casco convertible para todas las estaciones con mentonera abatible a 180º y calota en fibra de carbono.',
      features: [
        'Material: CARBON',
        'Peso: 1550 (±50 gr.)',
        'Sistema de liberación de emergencia',
        'Hebilla de metal micrométrica',
        'Ventilación en barbilla y sección superior',
        // ... (otros features)
      ],
    },
    {
      title: 'ADVANT X',
      imageUrl:
        'https://ls2helmets.com/images/products/569011011/grey/569011011img_left800.avif',
      description:
        'Casco convertible para todas las estaciones con mentonera abatible a 180º y calota compuesta de HPFC.',
      features: [
        'Material: HPFC',
        'Peso: 1600 (±50 gr.)',
        'Sistema de liberación de emergencia',
        'Hebilla de metal micrométrica',
        'Ventilación en barbilla y sección superior',
        // ... (otros features)
      ],
    },
    {
      title: 'FF906 ADVANT',
      imageUrl:
        'https://ls2helmets.com/images/products/569061011/grey/569061011img_left800.avif',
      description:
        'Casco convertible y versátil con mentonera abatible a 180º y calota en KPA.',
      features: [
        'Material: KPA',
        'Peso: 1650 (±50 gr.)',
        'Sistema de liberación de emergencia',
        'Hebilla de metal micrométrica',
        'Ventilación en barbilla y sección superior',
        // ... (otros features)
      ],
    },
    {
      title: 'STROBE II',
      imageUrl:
        'https://ls2helmets.com/images/products/569081011/grey/569081011img_perfil_abierto800.avif',
      description:
        'Casco modular con mentonera abatible a 90º, perfecto para viajes largos y uso diario.',
      features: [
        'Material: KPA',
        'Peso: 1550 (±50 gr.)',
        'Hebilla micrométrica',
        'Ventilación en barbilla y sección superior',
        // ... (otros features)
      ],
    },
  ];
  const similitudesListaAbatibles = [
    'Casco convertible con mentonera abatible a 180º',
    'Amplia visera antirayas preparada para el sistema antivaho, Pinlock Max Vision',
    'Visor solar interior',
    'Sistema de liberación de emergencia',
    'Hebilla de metal micrométrica',
    'Poliestireno expandido (EPS) de multidensidad',
    'Correa de barbilla reforzada',
    'Ventilación en barbilla y sección superior',
  ];
  const comparacionRapidaAbatibles = [
    {
      category: 'Material de la Calota',
      details: [
        { model: 'ADVANT X CARBON', description: 'CARBON' },
        { model: 'ADVANT X', description: 'HPFC' },
        { model: 'FF906 ADVANT', description: 'KPA' },
        { model: 'STROBE II', description: 'KPA' },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        {
          model: 'ADVANT X CARBON',
          description: 'Hebilla de metal micrométrica',
        },
        { model: 'ADVANT X', description: 'Hebilla de metal micrométrica' },
        { model: 'FF906 ADVANT', description: 'Hebilla de metal micrométrica' },
        { model: 'STROBE II', description: 'Hebilla micrométrica' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        {
          model: 'ADVANT X CARBON',
          description: 'Ventilación en barbilla y sección superior',
        },
        {
          model: 'ADVANT X',
          description: 'Ventilación en barbilla y sección superior',
        },
        {
          model: 'FF906 ADVANT',
          description: 'Ventilación en barbilla y sección superior',
        },
        {
          model: 'STROBE II',
          description: 'Ventilación en barbilla y sección superior',
        },
      ],
    },
    {
      category: 'Peso',
      details: [
        { model: 'ADVANT X CARBON', description: '1550 (±50 gr.)' },
        { model: 'ADVANT X', description: '1600 (±50 gr.)' },
        { model: 'FF906 ADVANT', description: '1650 (±50 gr.)' },
        { model: 'STROBE II', description: '1550 (±50 gr.)' },
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
