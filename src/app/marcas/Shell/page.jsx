import { ClusterMarcas } from '@/components/ClusterMarcas';
import { JsonLdScript } from '@/components/JsonLdScript';
import { PaginaTSGMarcasSinProductos } from '@/components/PaginaTSGMarcasSinProductos';

export const metadata = {
  title: 'Cascos para Moto Marca Shell | Cascos Pro Moto',
  description:
    'Cascos para motociclismo Shell. ✓ Innovación ✓ Durabilidad ✓ Económicos',
};

const Page = () => {
  const brand = 'Shell';
  const paragraph = `Los cascos de Shell son conocidos por su calidad y seguridad. Sin embargo, la marca ha dejado de fabricarlos. Aquí te mostramos otros cascos para moto de características similares.`;

  const title = `Cascos para Moto ${brand}: alternativas similares`;
  const subtitle = `Compra un casco de moto seguro y de calidad`;
  const imageUrl = false;

  const faq = [
    {
      '@type': 'Question',
      name: '¿Por qué la marca Shell dejó de fabricar estos cascos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La marca dejó de fabricar estos cascos debido a razones comerciales.',
      },
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'Title of a News Article',
      image: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ],
      datePublished: '2015-02-05T08:00:00+08:00',
      dateModified: '2015-02-05T09:20:00+08:00',
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
    <div className="flex flex-col justify-center items-center mx-auto mt-[200px] w-[90%]">
      <JsonLdScript data={jsonLd} />

      <PaginaTSGMarcasSinProductos
        title={title}
        paragraph={paragraph}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />

      <ClusterMarcas />
    </div>
  );
};

export default Page;
