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
  const paragraph = `Si llegaste aquí buscando “cascos para moto Shell”, queremos aclararte algo importante: Shell no es una marca de cascos de moto. Más bien, el término "shell" en inglés, que se traduce como "carcasa" o "cáscara" en español, se refiere comúnmente a la estructura externa de los cascos, la cual brinda la protección crucial durante un impacto.`;

  const title = `Cascos para Moto ${brand}: alternativas similares`;
  const subtitle = `Compra un casco de moto seguro y de calidad`;
  const imageUrl = false;

  const faq = [
    {
      '@type': 'Question',
      name: '¿Qué es el “Shell” de un Casco de Moto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '🔍 Shell: Es el armazón exterior del casco, diseñado para dispersar la fuerza del impacto y proteger tu cabeza en caso de un accidente. Los shells pueden ser fabricados con varios materiales, como policarbonato, fibra de vidrio, fibra de carbono, entre otros, cada uno con sus propias características y beneficios en términos de seguridad, peso y confort.',
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
