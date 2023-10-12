import { TopCascos } from '@/components/TopCascos';

export const metadata = {
  title: 'Cascos Pro',
  description: 'Certificados para Motociclismo',
};

export default function Home() {
  return (
    <>
      <section className="grid">
        <div className="flex justify-center items-center bg-black bg-[url('/vander-films-4ldc6lB9oBw-unsplash.jpg')] bg-cover bg-center min-h-screen">
          <div>
            <p className="font-bold text-center text-5xl text-white z-0 mt-[200px]">
              Tu Seguridad es Primero
            </p>
            <h1 className="font-bold text-center text-xl text-white z-0 mt-5">
              Cascos para Motos
            </h1>
            <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh] flex mx-auto">
              Comparativa de los <br />
              Mejores Cascos Certificados
            </button>
            <p className="text-1xl text-white z-0 mt-5 text-center p-2 lg:w-[40%] mx-auto">
              Analizamos comentarios, precios, certificaciones, reputación de
              las marcas, y otros datos relevantes para que puedas hacer la
              mejor compra de tu <strong>Casco para Motociclismo</strong>.
            </p>
            <div className="flex">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[7vh] items-center mb-3 mx-auto">
                <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
                  <img
                    src="/imgs/logoAGV.png"
                    alt="Logo AGV"
                    className="w-[70%]"
                  />
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
                  <img
                    src="/imgs/arailogo.png"
                    alt="Logo Arai"
                    className="w-[95%]"
                  />
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
                  <img
                    src="/imgs/hjclogo.png"
                    alt="Logo HJC"
                    className="w-[95%]"
                  />
                </div>
                <div className="w-[6rem] h-[4rem] bg-white flex items-center justify-center">
                  <img
                    src="/imgs/belllogo.png"
                    alt="Logo "
                    className="w-[95%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid">
        <div>
          <p className="font-bold text-lg mt-2 text-justify lg:w-[80%] mr-2 ml-2 lg:mx-auto">
            Te guiaremos hacia la mejor eleccion, siempre destacando aquellos
            cascos para moto que cuentan con certificados de seguridad para
            garantizar tu protección en cada ruta.
          </p>

          <h3 className="font-bold text-center text-5xl mt-10">
            Tipos de Cascos para Motociclismo
          </h3>
          <p className="text-left mt-3 lg:w-[50%] mr-2 ml-2 lg:mx-auto">
            Haz click en las siguientes imagenes para conocer mas sobre cada uno
            de los tipos de Cascos para Motoristas:
          </p>
          <div className="flex">
            <div className="grid grid-cols-2 gap-4 mt-[7vh] items-center mb-3 mx-auto">
              <div>
                <img
                  src="/imgs/pista-gp-rr-e2206-dot-mono-iridium-carbon.webp"
                  alt="Cascos Integrales"
                  className="w-[150px] h-[150px] object-cover cursor-pointer"
                />
                <h3 className="bg-white items-center justify-center cursor-pointer">
                  Cascos Integrales
                </h3>
              </div>
              <div>
                <img
                  src="/imgs/sportmodular-agv-e05-multi-mplk-overlay-matt-double-grey.webp"
                  alt="Cascos Abatibles"
                  className="w-[150px] h-[150px] object-cover cursor-pointer"
                />
                <h3 className="bg-white items-center justify-center cursor-pointer">
                  Cascos Abatibles
                </h3>
              </div>
              <div>
                <img
                  src="/imgs/x70-multi-e2205-mino-73-white-red.webp"
                  alt="Cascos Jet"
                  className="w-[150px] h-[150px] object-cover cursor-pointer"
                />
                <h3 className="bg-white items-center justify-center cursor-pointer">
                  Cascos Jet (Abierto 3/4)
                </h3>
              </div>
              <div>
                <img
                  src="/imgs/Motocross.webp"
                  alt="Cascos Jet"
                  className="w-[150px] h-[150px] object-cover cursor-pointer"
                />
                <h3 className="bg-white items-center justify-center cursor-pointer">
                  Cascos Motocross
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-center text-5xl mt-10">
          Top Mejores de Cascos del 2023
        </h3>
        <TopCascos />
      </section>
    </>
  );
}
