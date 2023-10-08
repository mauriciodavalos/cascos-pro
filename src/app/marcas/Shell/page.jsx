import { ClusterMarcas } from '@/components/ClusterMarcas';
import { JsonLdScript } from '@/components/JsonLdScript';
import { PaginaTSG } from '@/components/PaginaTSG';

export const metadata = {
  title: 'Cascos para moto marca Shell',
  description: 'Description for shell',
};

const Page = () => {
  const brand = 'Shell';
  const paragraph =
    'Esta marca ha dejado de fabricarlos pero te mostramos otros cascos para moto de caracteristicas similares';

  const title = `Cascos para Moto ${brand}`;
  const subtitle = `Comprar cascos para moto similares a ${brand}`;
  const imageUrl = false;

  const faq = [
    {
      '@type': 'Question',
      name: '¿Por qué la marca Shell dejó de fabricar estos cascos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La marca dejó de fabricar estos cascos debido a razones X, Y, Z.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cascos son similares a los de Shell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los cascos de las marcas A, B y C son similares en características a los de Shell.',
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
      <PaginaTSG
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
