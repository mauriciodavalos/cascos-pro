import { PaginaTSG } from '@/components/PaginaTSG';

export const metadata = {
  title: 'Marcas',
  description: 'Description for home',
};

const Page = () => {
  const brand = 'Shell';
  const paragraph =
    'Estos cascos para moto han destacado por su capacidad de innovacion en seguridad. Esta marca ha dejado de fabricarlos pero te mostramos otros cascos para moto de caracteristicas similares';

  const title = `Cascos para Moto ${brand}`;
  const subtitle = `Comprar cascos para moto similares a ${brand}`;
  const imageUrl = false;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description: paragraph,
    // añadir más campos según sea necesario
  };

  return (
    <div className="mt-[200px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PaginaTSG
        title={title}
        paragraph={paragraph}
        subtitle={subtitle}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Page;
