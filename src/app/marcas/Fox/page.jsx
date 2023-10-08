import { ClusterMarcas } from '@/components/ClusterMarcas';
import { JsonLdScript } from '@/components/JsonLdScript';

export const metadata = {
  title: 'Cascos para Moto Marca Fox | Cascos Pro Moto',
  description:
    'FOX® es la marca lider en Cascos para Motocross. Encuentra aqui las mejores reseñas, comparaciones y analisis de todo su catalogo',
};

const Page = () => {
  const brand = 'Fox Racing';
  const paragraph = `Aqui tienes un analisis de los Cascos para Motocross Fox Racing.`;
  const title = `Cascos para Motocross ${brand}`;
  const subtitle = `Descubre la variedad de modelos de cascos para motocross Fox`;
  const imageUrl1 =
    'https://www.foxracing.com.mx/cdn/shop/files/29657-002_1800x1800.jpg?v=1693537351';
  const imageUrl2 =
    'https://www.foxracing.com.mx/cdn/shop/files/28033-110_1800x1800.jpg?v=1690935396';
  const imageUrl3 =
    'https://www.foxracing.com.mx/cdn/shop/files/30874-018_1800x1800.jpg?v=1696227638';

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
    <div className="flex flex-col justify-center items-center mx-auto mt-[110px] w-[90%]">
      <JsonLdScript data={jsonLd} />
      <h1 className="font-bold text-center text-5xl">{title}</h1>
      <div className="text-1xl z-0 sm:text-left p-2 lg:w-[40%]">
        <p>
          Fox Racing se mantiene como una marca de referencia en el mundo del
          motocross.
        </p>
        <p>
          Su especialización en deportes extremos les permite crear cascos que
          cumplen con los rigurosos estándares de los deportistas más audaces.
        </p>
      </div>
      <h1 className="font-bold text-3xl">
        Analisis de los mejores modelos de Cascos {brand}
      </h1>
      <h2 className="font-bold text-2xl">Similitudes:</h2>
      <ul>
        <li>Equipados con el sistema MIPS®.</li>
        <li>Revestimientos de EPS de doble densidad.</li>
        <li>Cumplen con normativas relevantes (DOT y/o ECE 22.05).</li>
        <li>Ideales para Motocross (V2 también para MTB).</li>
      </ul>
      <h3>Comparación Rápida</h3>
      <ul>
        Construcción
        <li>V1: ABS/policarbonato</li>
        <li>V2: ABS/PC</li>
        <li>V3: MCT (Carbono/FRP)</li>
      </ul>
      <ul>
        Sistema de Visera:
        <li>V1: Regulable con tornillos</li>
        <li>V2: MVRS™ (Liberación magnética)</li>
        <li>V3: MVRS™ (Imán de poste central y tornillos laterales)</li>
      </ul>
      <ul>
        Ventilación:
        <li>V1: 7 entradas/4 salidas</li>
        <li>V2: 11 entradas/4 salidas</li>
        <li>V3: Rejillas de malla inyectada</li>
      </ul>
      <ul>
        Forro:
        <li>V1: Estándar desmontable/lavable</li>
        <li>V2: XT2® antimicrobiano</li>
        <li>V3: X-Static®</li>
      </ul>
      <div className="flex">
        <div>
          {imageUrl1 ? <img src={imageUrl1} alt={title} /> : null}
          <p>CASCO FOX V1</p>
          <p>
            Es presentado como una opción competitiva y versátil en el segmento
            básico.
          </p>
          <li>Calotas y EPS: Ofrece 4 tallas de calota y 6 de EPS.</li>
          <li>Ventilación: 7 conductos de entrada y 4 de salida</li>
          <li>Visera: Regulable con tornillos.</li>
          <li>
            Construcción de la calota: ABS y policarbonato moldeada por
            inyección.
          </li>
        </div>
        <div>
          {imageUrl2 ? <img src={imageUrl2} alt={title} /> : null}
          <p>CASCO FOX V2</p>
          <p>
            Se destaca por establecer un estándar en los cascos de nivel medio
            con características de nivel profesional y nueva tecnología de
            seguridad.
          </p>
          <li>
            MVRS ™: Introduce el sistema de liberación de visera magnética
            (MVRS™), diseñado para liberarse durante un choque
          </li>
          <li>Calotas y EPS: 4 tallas de calota y 5 de EPS.</li>
          <li>Ventilación: 11 conductos de entrada y 4 de salida.</li>
          <li>
            Barra de mentón: De EPP/PU para gestionar energía y mantener bajo el
            peso.
          </li>
          <li>
            Forro: XT2®, que es antimicrobiano y controla tanto el olor como la
            absorción de la humedad.
          </li>
          <li>
            Construcción de la calota: ABS y policarbonato moldeada por
            inyección.
          </li>
        </div>

        <div>
          {imageUrl3 ? <img src={imageUrl3} alt={title} /> : null}
          <p>CASCO FOX V3</p>{' '}
          <p>
            Se le considera tecnológicamente avanzado, repleto de
            características de siguiente nivel y orientado a corredores
            profesionales
          </p>
          <li>
            MVRS ™: También utiliza el sistema MVRS™ pero con un diseño que
            incluye un imán de poste central y dos tornillos de corte laterales.
          </li>
          <li>
            Construcción de la calota: Emplea la tecnología MCT (Multi Composite
            Technology), combinando resinas de carbono y FRP.
          </li>
          <li>Calotas y EPS: 4 tallas de calota y EPS.</li>
          <li>
            Ventilación: Rejillas de ventilación de malla inyectada para
            superior ventilación y protección contra suciedad.
          </li>
          <li>
            Forro: Usa un forro X-Static® que es extraíble y lavable,
            proporcionando comodidad y frescura.
          </li>
          <li>
            Almohadillas para las mejillas: Incluyen una función de liberación
            de emergencia.
          </li>
          <li>Anillos: En D de fibra de carbono.</li>
          <li>
            Barra de mentón: De EPP/PU para gestionar energía y mantener bajo el
            peso.
          </li>
          <li>
            Forro: XT2®, que es antimicrobiano y controla tanto el olor como la
            absorción de la humedad.
          </li>
          <li>
            Construcción de la calota: ABS y policarbonato moldeada por
            inyección.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Page;
