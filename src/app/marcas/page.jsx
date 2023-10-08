import { PaginaTSG } from '@/components/PaginaTSG';
import { ClusterMarcas } from '@/components/ClusterMarcas';

export const metadata = {
  title: 'Tipos',
  description: 'Description for home',
};

export default function Tipos() {
  const title = 'My Title';
  const subtitle = 'My Subtitle';

  return (
    <div className="mt-[200px]">
      <PaginaTSG
        title={title}
        subtitle={subtitle}
        paragraph="Your Paragraph"
        imageUrl="your-image-url.jpg"
      />
      <ClusterMarcas />
    </div>
  );
}
