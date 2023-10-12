/** @type {NextPage} */
const Page = () => {
  const helmets = [
    {
      name: 'Shoei - Neotec II',
      features: [
        'Diseño aerodinámico para reducción de ruido',
        'Sistema de ventilación con múltiples entradas y salidas',
        'Interior desmontable y lavable',
        'Visera solar integrada',
      ],
      safetyStandards: 'DOT y ECE',
      accessories:
        'Pinlock anti-vaho, sistema de comunicación Sena SRL/SRL2, almohadillas de mejilla opcionales',
    },
    {
      name: 'Schuberth - C4 Pro',
      features: [
        'Acústica optimizada para minimizar el ruido',
        'Sistema de comunicación preinstalado (SC1)',
        'Ventilación eficiente',
        'Visera solar integrada',
      ],
      safetyStandards: 'ECE y DOT',
      accessories:
        'Pantalla anti-vaho, almohadillas interiores intercambiables, sistema de comunicación SC1',
    },
    {
      name: 'AGV - Sportmodular',
      features: [
        'Calota de fibra de carbono',
        'Sistema de ventilación ajustable',
        'Pantalla antirrayas y anti-vaho',
        'Interior desmontable y lavable',
      ],
      safetyStandards: 'ECE y DOT',
      accessories:
        'Visor solar, Pinlock, kit de almohadillas de mejilla opcionales',
    },
    {
      name: 'HJC - RPHA 90S',
      features: [
        'Diseño compacto y ligero',
        'Ventilación superior ajustable',
        'Sistema de liberación rápida de la pantalla',
        'Interior antibacteriano',
      ],
      safetyStandards: 'ECE y DOT',
      accessories:
        'Pantalla anti-vaho, almohadillas interiores intercambiables, sistema de comunicación Smart HJC',
    },
    {
      name: 'Nolan - N100-5',
      features: [
        'Sistema de doble acción para abrir la mentonera',
        'Ventilación superior e inferior',
        'Visera solar interna',
        'Opción para sistema de comunicación N-Com',
      ],
      safetyStandards: 'ECE y DOT',
      accessories:
        'Pantalla anti-vaho Pinlock, kit de almohadillas, sistema de comunicación N-Com',
    },
  ];

  return (
    <>
      <section className="grid">
        <div className="flex justify-center items-center bg-black  bg-cover bg-center min-h-screen">
          <div>
            <p className="font-bold text-center text-5xl text-white z-0 mt-[200px]">
              Versatilidad y Comodidad en tu Viaje
            </p>
            <h1 className="font-bold text-center text-2xl text-white z-0 mt-5">
              Cascos Abatibles o Modulares
            </h1>
            <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh] flex mx-auto">
              Top Mejores <br />
              Mejores Cascos Abatibles del 2023
            </button>
            <p className="text-lg text-white z-0 mt-5 text-justify p-2 lg:w-[40%] mr-2 ml-2 lg:mx-auto">
              Los cascos abatibles o modulares ofrecen una versatilidad única al
              combinar las ventajas de los cascos integrales y los abiertos.
              Permiten levantar la parte frontal del casco, proporcionando
              comodidad al hablar o tomar un respiro, sin necesidad de
              quitárselo completamente. Este tipo de casco es especialmente
              popular entre los motociclistas viajeros y urbanos que valoran una
              combinación de comodidad y seguridad en sus trayectos.
            </p>
          </div>
        </div>
      </section>
      <section className="grid lg:w-[60%] mx-auto">
        <div className=" bg-gray-100 rounded-lg shadow mt-5">
          <p className="font-bold text-center text-3xl mt-10">
            Caracteristicas Principales de los cascos Integrales
          </p>
          <h3 className="font-bold text-5xl mt-10 mr-2 ml-2 lg:mx-auto">
            Ventajas
          </h3>
          <div className="flex">
            <div className="mt-5 items-center mb-3 mx-auto p-10">
              <ul className="list-disc">
                <li className="text-base">
                  <h2 className="font-semibold text-lg mb-2">Versatilidad</h2>
                  <p>
                    Los cascos abatibles se pueden utilizar tanto como cascos
                    integrales cuando la visera y la barbilla están cerradas, o
                    como cascos abiertos cuando se levantan. Esto los hace
                    ideales para una variedad de situaciones de conducción.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Comodidad</h2>
                  <p>
                    La posibilidad de abrir la parte frontal facilita el proceso
                    de ponerse y quitarse el casco. Esto es especialmente útil
                    para personas con gafas.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Ventilación</h2>
                  <p>
                    Al poder abrirse, estos cascos permiten un mejor flujo de
                    aire, lo que puede ser muy agradable en días cálidos o en
                    tráfico lento.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Comunicación</h2>
                  <p>
                    Cuando estás parado o conduciendo a baja velocidad, puedes
                    levantar la parte frontal para hablar más fácilmente con
                    otros, sin tener que quitarte todo el casco.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Visibilidad</h2>
                  <p>
                    En el modo abierto, el campo de visión es más amplio, lo que
                    te permite tener una mejor percepción de tu entorno, aunque
                    a costa de menor protección.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <h3 className="font-bold text-5xl mt-10 mr-2 ml-2 lg:mx-auto">
            Desventajas
          </h3>
          <div className="flex">
            <div className="mt-5 items-center mb-3 mx-auto p-10">
              <ul className="list-disc">
                <li className="text-base">
                  <h2 className="font-semibold text-lg mb-2">
                    Menor Protección
                  </h2>
                  <p>
                    Generalmente ofrecen menos protección que los cascos
                    integrales, especialmente en la zona de la barbilla y
                    mandíbula.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Peso</h2>
                  <p>
                    Suelen ser más pesados debido a los mecanismos adicionales
                    para abatir.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Ruido</h2>
                  <p>
                    Pueden ser más ruidosos que los cascos integrales debido a
                    las bisagras y otros mecanismos.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Precio</h2>
                  <p>
                    Generalmente son más caros que los cascos de un solo tipo
                    debido a su diseño más complejo.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Mantenimiento</h2>
                  <p>
                    Los mecanismos abatibles pueden desgastarse o romperse,
                    requiriendo más mantenimiento o reemplazo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-[50%] mx-auto">
        <h3 className="font-bold text-5xl mt-10 mr-2 ml-2 lg:mx-auto">
          Top 5 Mejores Cascos Abatibles del 2023
        </h3>
        <div className="container mx-auto p-4 ">
          <ul>
            {helmets.map((helmet, index) => (
              <li key={index} className="border p-4 mb-4">
                <h2 className="text-xl font-semibold">{helmet.name}</h2>
                <h3 className="text-lg mt-2">Características Principales:</h3>
                <ul className="list-disc list-inside">
                  {helmet.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                {helmet.accessories && (
                  <p className="mt-2">
                    <strong>Accesorios Incluidos:</strong> {helmet.accessories}
                  </p>
                )}
                <p className="mt-2">
                  <strong>Estándares de Seguridad:</strong>{' '}
                  {helmet.safetyStandards}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page;
