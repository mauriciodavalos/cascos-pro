import { PaginaTSGMarcasConSubCategorias } from '@/components/PaginaTSGMarcasConSubCategorias';

/** @type {NextPage} */
const Page = () => {
  const brand = 'Nolan';
  const title = `Cascos para Moto ${brand}`;
  const paragraph1 =
    'Con sus raíces en Italia, AGV se mantiene firme en su compromiso con la calidad y la innovación, produciendo cascos que no solo son seguros sino también estilizados y aerodinámicos. ';

  const helmetsDataIntegrales = [
    {
      title: 'X-804 ULTRA CARBON',
      imageUrl:
        'https://2ride.twic.pics/cdn/Nolan/Nolan/Images/Packshots/Helmets/47271/image-thumb__47271__1000x1000/X84000408022_NOLAN-XSERIES-X-804-ULTRA-CARBON-MOTOGP_ps_05.png?twic=v1/contain=705x572',
      description:
        'Casco integral de alto rendimiento con orientación para carreras.',
      features: [
        'Retention system: Anillos en D dobles',
        'Outer shell material: Fibra de carbón',
        'Ventilation: RAF Racing Air Flow',
        'Number of outer shell: 4',
        'Comfort Type: Acolchado interior "Carbon Fitting" extraíble',
      ],
    },
    {
      title: 'X-903 ULTRA CARBON',
      imageUrl:
        'https://2ride.twic.pics/cdn/Images-To-Sort/46150/image-thumb__46150__1000x1000/X9U000682073_XLITE-X-903-ULTRA-CARBON-STARLIGHT-N-COM_ps_01.png?twic=v1/contain=705x572',
      description:
        'Casco integral versátil con características adicionales como sistema de comunicación.',
      features: [
        'Retention system: Anillos en D dobles',
        'Outer shell material: Fibra de carbón',
        'Ventilation: Extractores de aire, ventilación mentonera, ventilación superior',
        'Number of outer shell: 3',
        'Comfort Type: Acolchado interior "Carbon Fitting" extraíble',
      ],
    },
    {
      title: 'N80-8',
      imageUrl:
        'https://2ride.twic.pics/cdn/Nolan/Nolan/Images/Packshots/Helmets/47082/image-thumb__47082__1000x1000/N88000675076_NOLAN-N80-8-WANTED-N-COM_ps_01.png?twic=v1/contain=705x572',
      description:
        'Casco integral con tecnología Airbooster y sistema de comunicación N-Com.',
      features: [
        'Retention system: Microbloqueo2',
        'Outer shell material: Policarbonato Lexan™',
        'Ventilation: Airbooster Technology',
        'Number of outer shell: 2',
        'Comfort Type: Acolchado interior "Clima Comfort Top" extraíble',
      ],
    },
    {
      title: 'N60-6 SPORT',
      imageUrl:
        'https://2ride.twic.pics/cdn/Images-To-Sort/47064/image-thumb__47064__1000x1000/N6S000686027_NOLAN-N6S-HOTFOOT_ps_05.png?twic=v1/contain=705x572',
      description:
        'Casco integral con enfoque en el deporte y tecnología Airbooster.',
      features: [
        'Retention system: Microbloqueo',
        'Outer shell material: Policarbonato Lexan™',
        'Ventilation: Airbooster Technology',
        'Number of outer shell: 2',
        'Comfort Type: Acolchado interior "Clima Comfort" extraíble',
      ],
    },
  ];
  const similitudesListaIntegrales = [
    'Homologación ECE: Todos cuentan con homologación tipo P.',
    'Material de la Calota: Todos están hechos de materiales de alta calidad como fibra de carbón o Policarbonato Lexan™.',
    'Ventilación: Todos los modelos tienen ventilación superior y ventilación en la mentonera.',
    'Sistema de Retención: La mayoría usa anillos en D dobles o un microbloqueo.',
    'Tipo de Comodidad: Todos tienen acolchado interior extraíble.',
    'Producto de Seguridad: Todos tienen el Sistema de Liberación de Emergencia de Nolan (NERS).',
    'Otras características: Todos vienen con una bolsa para el casco.',
  ];
  const comparacionRapidaIntegrales = [
    {
      category: 'Material de la Calota',
      details: [
        { model: 'X-804 ULTRA CARBON', description: 'Fibra de carbón' },
        { model: 'X-903 ULTRA CARBON', description: 'Fibra de carbón' },
        { model: 'N80-8', description: 'Policarbonato Lexan™' },
        { model: 'N60-6 SPORT', description: 'Policarbonato Lexan™' },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        { model: 'X-804 ULTRA CARBON', description: 'Anillos en D dobles' },
        { model: 'X-903 ULTRA CARBON', description: 'Anillos en D dobles' },
        { model: 'N80-8', description: 'Microbloqueo2' },
        { model: 'N60-6 SPORT', description: 'Microbloqueo' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        {
          model: 'X-804 ULTRA CARBON',
          description: 'Ventilación mentonera, frontal, superior',
        },
        {
          model: 'X-903 ULTRA CARBON',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
        {
          model: 'N80-8',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
        {
          model: 'N60-6 SPORT',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
      ],
    },
  ];

  const helmetsDataAbatibles = [
    {
      title: 'N120-1',
      imageUrl:
        'https://2ride.twic.pics/cdn/Nolan/Nolan/Images/Packshots/Helmets/45717/image-thumb__45717__1000x1000/N1F000690024_NOLAN-N100-6-FB-SUBWAY-N-COM_ps_08.png?twic=v1/contain=530x430',
      description: 'Casco modular Nolan con tecnología Flip-Back.',
      features: [
        'Sistema de retención: Microbloqueo2',
        'Material de la calota: Policarbonato Lexan™',
        'Tecnología de ventilación: Airbooster Technology',
        'Número de calotas externas: 2',
        'Tipo de confort: Interior acolchado "Clima Comfort Top" extraíble',
      ],
    },
    {
      title: 'N100-6',
      imageUrl:
        'https://2ride.twic.pics/cdn/Nolan/Nolan/Images/Packshots/Helmets/48597/image-thumb__48597__1000x1000/N16000708027_NOLAN-N100-6-PALOMA-N-COM_ps_08.png?twic=v1/contain=530x430',
      description: 'Casco modular Nolan con tecnología Flip-Up.',
      features: [
        'Sistema de retención: Microbloqueo2',
        'Material de la calota: Policarbonato Lexan™',
        'Tecnología de ventilación: Airbooster Technology',
        'Número de calotas externas: 2',
        'Tipo de confort: Interior acolchado "Clima Comfort Top" extraíble',
      ],
    },
    {
      title: 'X-1005 ULTRA CARBON',
      imageUrl:
        'https://2ride.twic.pics/cdn/Nolan/Nolan/Images/Packshots/Helmets/45833/image-thumb__45833__1000x1000/U15000691044_X-LITE-X-1005-ULTRA-CARBON-UNDERCOVER-N-COM_ps_08.png?twic=v1/contain=530x430',
      description: 'Casco modular Nolan con tecnología Flip-Up.',
      features: [
        'Sistema de retención: Microbloqueo2',
        'Material de la calota: Fibra de carbón',
        'Tecnología de ventilación: Ventilación superior, ventilación mentonera, extractores de aire',
        'Número de calotas externas: 3',
        'Tipo de confort: Interior acolchado "Carbon Fitting" extraíble',
      ],
    },
    {
      title: 'N90-3',
      imageUrl:
        'https://2ride.twic.pics/cdn/Images-To-Sort/46149/image-thumb__46149__1000x1000/N9Z000685050_NOLAN-N90-3-06-LIGHTHOUSE-N-COM_ps_08.png?twic=v1/contain=530x430',
      description: 'Casco modular Nolan con tecnología Flip-Up.',
      features: [
        'Sistema de retención: Microbloqueo2',
        'Material de la calota: Policarbonato Lexan™',
        'Tecnología de ventilación: Airbooster Technology',
        'Número de calotas externas: 1',
        'Tipo de confort: Interior acolchado "Clima Comfort" extraíble',
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
        { model: 'N120-1', description: 'Policarbonato Lexan™' },
        { model: 'N100-6', description: 'Policarbonato Lexan™' },
        { model: 'X-1005 ULTRA CARBON', description: 'Fibra de carbón' },
        { model: 'N90-3', description: 'Policarbonato Lexan™' },
      ],
    },
    {
      category: 'Sistema de Retención',
      details: [
        { model: 'N120-1', description: 'Microbloqueo2' },
        { model: 'N100-6', description: 'Microbloqueo2' },
        { model: 'X-1005 ULTRA CARBON', description: 'Microbloqueo2' },
        { model: 'N90-3', description: 'Microbloqueo2' },
      ],
    },
    {
      category: 'Ventilación',
      details: [
        {
          model: 'N120-1',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
        {
          model: 'N100-6',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
        {
          model: 'X-1005 ULTRA CARBON',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
        {
          model: 'N90-3',
          description: 'Ventilación mentonera, superior, extractores de aire',
        },
      ],
    },
  ];

  const helmetsDataJet = null;
  const similitudesListaJet = [
    'Universo: Todos son Flip-Up o Flip-Back.',
    'Homologación P/J: Todos están homologados P/J.',
    'Sistema de seguridad de la mentonera: Todos utilizan DUAL ACTION.',
    'Mecanismo del visor: Todos tienen sistema de desenganche rápido de la pantalla.',
    'Pinlock: Todos tienen Pinlock® con pines ajustables.',
    'Ventilación: Todos tienen extractores de aire y ventilación mentonera y superior.',
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
