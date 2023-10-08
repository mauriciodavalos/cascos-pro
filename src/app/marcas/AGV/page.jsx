import { PaginaTSG } from '@/components/PaginaTSG';

export const metadata = {
  title: 'Marcas',
  description: 'Description for home',
};

const Page = () => {
  const title = 'Cascos para Moto AGV';
  const subtitle =
    'Con sus raíces en Italia, AGV se mantiene firme en su compromiso con la calidad y la innovación, produciendo cascos que no solo son seguros sino también estilizados y aerodinámicos, siendo una elección preferida entre los corredores profesionales y entusiastas del motociclismo.';

  return (
    <div className="mt-[200px]">
      <PaginaTSG
        title={title}
        subtitle={subtitle}
        paragraph="Your Paragraph"
        imageUrl="your-image-url.jpg"
      />
    </div>
  );
};

export default Page;
