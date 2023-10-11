import { TopCascos } from '@/components/TopCascos';

export const metadata = {
  title: 'Cascos Pro',
  description: 'Certificados para Motociclismo',
};

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col justify-center items-center min-h-screen bg-black">
        <div className="absolute inset-0 bg-[url('/vander-films-4ldc6lB9oBw-unsplash.jpg')] bg-cover bg-center opacity-50 w-full"></div>
        <p className="font-bold text-center text-5xl text-white z-0 mt-[150px]">
          Tu Seguridad es Primero
        </p>
        <h1 className="font-bold text-center text-xl text-white z-0 mt-5">
          Cascos para Motos
        </h1>
        <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh]">
          Comparativa de los <br />
          Mejores Cascos Certificados
        </button>
        <p className="text-1xl text-white z-0 mt-[5vh] ml-5 text-center sm:text-left p-2 lg:w-[40%]">
          Analizamos comentarios, testimonios de usuarios, precios,
          certificaciones, reputación de las marcas, y otros datos relevantes{' '}
          para que puedas hacer la mejor compra de tu{' '}
          <strong>Casco para Motociclismo</strong>.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[7vh] z-0 items-center mb-2">
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img src="/imgs/logoAGV.png" alt="Logo AGV" className="w-[70%]" />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img
              src="/imgs/shoeilogo.png"
              alt="Logo Shoei"
              className="w-[95%]"
            />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img
              src="/imgs/schubertlogo.png"
              alt="Logo Schubert"
              className="w-[95%]"
            />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img src="/imgs/arailogo.png" alt="Logo Arai" className="w-[95%]" />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img
              src="imgs/nolanlogo.png"
              alt="Logo Nolan"
              className="w-[95%]"
            />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img
              src="/imgs/sharklogo.png"
              alt="Logo Shark"
              className="w-[80%]"
            />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img src="/imgs/hjclogo.png" alt="Logo HJC" className="w-[95%]" />
          </div>
          <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
            <img src="/imgs/belllogo.png" alt="Logo " className="w-[95%]" />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="w-[80%] lg:w-[50%]">
          <p className="font-bold text-lg z-0 mt-2 justify-center">
            Exploramos las mejores marcas y te guiaremos hacia la mejor
            eleccion, siempre destacando aquellos cascos para moto que cuentan
            con certificados de seguridad para garantizar tu protección en cada
            ruta.
          </p>

          <p className="font-bold text-center text-5xl z-0 mt-10">
            Tipos de Cascos para Motociclismo
          </p>
          <p className="text-1x z-0 mt-5">
            Haz click en las siguientes imagenes para conocer mas sobre cada uno
            de los tipos de Cascos para Motoristas:
          </p>
        </div>
        <div className="grid grid-cols-2 mt-2 z-0 mx-auto">
          <h3 className="bg-white items-center justify-center">
            <div className="w-[250px] h-[200px]">
              <img
                src=" https://dainese-cdn.thron.com/delivery/public/image/dainese/fc82b207-571c-48d2-a3b7-6c885a264b69/ramfdh/std/1230x1230/pista-gp-rr-e2206-dot-mono-matt-carbon.jpg?format=auto"
                alt="Cascos Integrales"
              />
            </div>
            Cascos Integrales
          </h3>
          <h3 className="bg-white items-center justify-center">
            <div className="w-[250px] h-[200px]">
              <img
                src="https://dainese-cdn.thron.com/delivery/public/image/dainese/477fefeb-e8db-443d-a7ac-2a8ffa0ed55e/ramfdh/std/615x615/tourmodular-ece2206-mono-matt-black.jpg?format=auto"
                alt="Cascos Abatibles"
              />
            </div>
            Cascos Abatibles
          </h3>
          <h3 className="bg-white items-center justify-centerw-[300px] h-[300px]">
            <div className="w-[250px] h-[200px]">
              <img
                src="https://dainese-cdn.thron.com/delivery/public/image/dainese/9ab8de40-32aa-4e2d-8730-bfcf6d8605c4/ramfdh/std/615x615/x70-multi-e2205-mino-73-white-red.jpg?format=auto"
                alt="Cascos Jet"
              />
            </div>
            Cascos Jet (Abierto 3/4)
          </h3>
          <h3 className="bg-white items-center justify-center">
            <div className="w-[200px] h-[200px]">
              <img
                src="https://www.foxracing.com.mx/cdn/shop/files/30874-018_1800x1800.jpg?v=1696227638"
                alt="Cascos Jet"
              />
            </div>
            Cascos Motocross
          </h3>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-center text-5xl z-0 mt-4">
          Los mejores Cascos para Moto del 2023
        </h2>
        <TopCascos />
      </section>
      {/*  */}
      <br></br> <br></br> <br></br>
      <br></br>
      <section>
        <h2>Cascos para Motos de Mujer</h2>
      </section>
      <section>
        <h2>¿Cuáles son las certificaciones para cascos de moto?</h2>
        <h2>¿Cuál es el mejor tipo de casco para moto?</h2>
      </section>
      <section>
        <h2>cascos para moto económicos - los cascos mas baratos </h2>
      </section>
      <section>
        <h2>ofertas de cascos para motos </h2>
      </section>
      {/* <section>
        <p className="font-bold text-center text-3xl text-black z-0 mt-3">
          ¿Por qué es importante usar un casco para moto?
        </p>
        <div className=" ml-[10%] mr-[10%]">
          <p className="mt-2">
            🏍️ <strong>¡Vamos al grano!</strong> Tu moto te lleva a grandes
            aventuras, pero sin casco, te arriesgas a no vivir para contarlas.
            ¡Ponte el casco y asegura tus historias para el futuro! 🚀🏍️
          </p>
          <p className="mt-2">
            🧠 Protege Tu Coco: Tu cerebro es el cuartel general de “Operaciones
            Tú”. Un casco es como la armadura de un caballero, ¡pero para tu
            cabeza!
          </p>
          <p className="mt-2">
            😎 Estilo Sobre Ruedas: Los cascos hoy en día son más que un
            accesorio de seguridad. ¡Son una declaración de estilo! Entra en la
            carretera luciendo ese casco futurista o retro que hace girar
            cabezas.
          </p>
          <p className="mt-2">
            🐦 ¡Cuidado con ese Bicho! ¿Alguna vez te has encontrado con un
            insecto a toda velocidad? Un casco te salva de esos encuentros
            desagradables y ventosos.
          </p>
          <p className="mt-2">
            🌦️ Contra Viento y Lluvia: ¡Que una pequeña lluvia no detenga tu
            paseo! Tu casco es tu escudo personal contra los elementos
          </p>
          <p className="mt-2">
            🚨 ¡Es la Ley! En muchos lugares, rodar sin casco es como decirle
            hola a una multa. ¡Mejor evitar encuentros no deseados con la ley!
          </p>
          <p className="mt-2">
            👂 Reducción de Ruido: Los cascos también ayudan a reducir el ruido
            del viento y del tráfico, permitiéndote concentrarte en la carretera
            y disfrutar de tu paseo.
          </p>
        </div>
      </section> */}
      <ul>
        <li>
          ¿Qué marcas de cascos son certificados?---Certificaciones DOT, ECE,
          SNELL
        </li>
        <li>
          Multas por no traer casco: En cuanto a la certificación que deben
          cumplir, ésta debe ser la Norma Oficial Mexicana NOM-206-SCFI/SSA2 o
          una norma internacional similar vigente (DOT FMVSS 218, SNELL o ECE
          22-05). La NOM-206-SCFI/SSA2 es la que habla sobre los cascos de
          seguridad para la prevención y atención inmediata de lesiones en la
          cabeza de motociclistas, la cual se publicó en 2018. Aquellos cascos
          que cumplan con esta certificación o cualquiera internacional,
          portarán una etiqueta en la parte posterior que testifique que pasaron
          todas las pruebas y tienen todos los requisitos necesarios para ser
          seguros. Esa etiqueta debe ser parte de la pintura, no un adhesivo que
          se pueda remover.
        </li>
        <li>Donde Comprar y cuanto cuesta --- Cascos de moto económicos. </li>
        <li>
          Tipos de Cascos : Abatible, Motocross, Cerrados/Integrales, Abiertos
        </li>
        <li>
          Las mejores marcas son: Arai, Shoei, Shark, Airoh, Nolan, HJC, AGV,
          Suomy, Nexx, Alpine Star, Biltwell, Bell y Caberg. ---¿Qué
          certificacion tienen los cascos Kov?
        </li>
        <li>Tallas y consejos para comprar un casco</li>
        <li>Pagina Buen Fin</li>
        <li>Accesorios para Casco</li>
        <li>Sistemas de Intercomunicacion para Cascos</li>
        <li></li>
      </ul>
    </div>
  );
}
