import { PaginaTSGMarcasSinProductos } from '@/components/PaginaTSGMarcasSinProductos';

export const metadata = {
  title: 'Cascos para Moto Marca Italika | Cascos Pro Moto',
  description:
    'Cascos Italika® para Moto. Encuentra aqui las mejores reseñas, comparaciones y analisis de todo su catalogo',
};

const Page = () => {
  const brand = 'Italika';
  const paragraph = ` Aunque Italika ha ganado popularidad por su extensa línea de motocicletas a precios accesibles, su oferta de cascos parece no estar a la par en términos de calidad. Las críticas señalan que los materiales utilizados para la construcción de estos cascos pueden dejar mucho que desear, poniendo en cuestión su durabilidad y, lo más importante, su nivel de seguridad.`;
  const paragraph2 = `Es recomendable que los consumidores consideren otras opciones si están en búsqueda de un casco que ofrezca una protección confiable y una buena relación calidad-precio.`;

  const title = `Cascos para Moto ${brand}`;
  const subtitle = `Te invitamos a descubrir opciones de Cascos de Motociclismo similares bien cualificadas`;
  const imageUrl = false;

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
      <PaginaTSGMarcasSinProductos
        title={title}
        paragraph={paragraph}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Page;
