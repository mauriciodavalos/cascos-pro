/** @type {NextPage} */
const Page = () => {
  const helmets = [
    {
      name: 'Bell - Custom 500',
      features: [
        'Diseño retro clásico',
        'Varias capas de fibra de vidrio para la calota',
        'Amplia gama de gráficos y colores',
        'Interior antibacteriano desmontable y lavable',
      ],
      safetyStandards: 'DOT y ECE',
      accessories:
        'Visores y pantallas desmontables, almohadillas interiores opcionales',
    },
    {
      name: 'Shoei - J-Cruise',
      features: [
        'Visor solar retráctil',
        'Calota aerodinámica',
        'Interior 3D para mayor comodidad',
        'Excelente ventilación',
      ],
      safetyStandards: 'DOT y ECE',
      accessories: 'Sistema de comunicación Sena, pantallas opcionales',
    },
    {
      name: 'LS2 - OF569',
      features: [
        'Excelente ventilación',
        'Diseño compacto',
        'Visera solar retráctil',
        'Interior desmontable y lavable',
      ],
      safetyStandards: 'DOT y ECE',
      accessories: 'Pantalla anti-vaho, almohadillas interiores opcionales',
    },
    {
      name: 'Biltwell - Bonanza',
      features: [
        'Diseño sencillo y sin adornos',
        'Calota de acrilonitrilo butadieno estireno (ABS)',
        'Forro de espuma EPS',
        'Interior de lycra desmontable',
      ],
      safetyStandards: 'DOT',
      accessories: 'Visores desmontables, almohadillas de mejilla opcionales',
    },
    {
      name: 'Arai - SZ-R VAS',
      features: [
        'Comodidad insuperable',
        'Sistema de ventilación ajustable',
        'Calota de fibra de vidrio',
        'Opciones de personalización',
      ],
      safetyStandards: 'DOT y ECE',
      accessories:
        'Pantallas anti-vaho, sistema de comunicación, almohadillas interiores personalizables',
    },
  ];

  return (
    <>
      <section className="grid">
        <div className="flex justify-center items-center bg-black  bg-cover bg-center min-h-screen">
          <div>
            <p className="font-bold text-center text-5xl text-white z-0 mt-[200px]">
              Ideales para la Ciudad
            </p>
            <h1 className="font-bold text-center text-2xl text-white z-0 mt-5">
              Cascos Jet o Abiertos 3/4
            </h1>
            <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh] flex mx-auto">
              Top Mejores <br />
              Mejores Cascos Jet del 2023
            </button>
            <p className="text-lg text-white z-0 mt-5 text-justify p-2 lg:w-[40%] mr-2 ml-2 lg:mx-auto">
              Los cascos abiertos han sido durante mucho tiempo una opción
              popular para los conductores de motonetas y motos de poca
              cilindrada, especialmente en entornos urbanos. Pero, ¿por qué son
              tan adecuados para este tipo de conducción? En este artículo,
              exploraremos las razones que hacen de los cascos abiertos la
              elección ideal para moverse por la ciudad en motonetas o motos de
              pequeña cilindrada.
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
                  <h2 className="font-semibold text-lg mb-2">
                    Mayor Visibilidad
                  </h2>
                  <p>
                    En el tráfico urbano, tener una amplia visibilidad es
                    crucial para la seguridad. Los cascos abiertos ofrecen un
                    campo de visión más amplio, lo que te permite estar más
                    consciente de tu entorno.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Ventilación</h2>
                  <p>
                    La conducción en la ciudad a menudo implica detenerse y
                    arrancar en semáforos o en el tráfico. Los cascos abiertos
                    son generalmente más ventilados, lo que es especialmente
                    útil en climas cálidos o días soleados.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Comodidad</h2>
                  <p>
                    Los cascos abiertos son generalmente más ligeros y menos
                    restrictivos que sus contrapartes integrales o abatibles.
                    Esto los hace más cómodos para viajes cortos típicos de la
                    conducción urbana.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Facilidad de Comunicación
                  </h2>
                  <p>
                    Si te detienes para hablar con alguien o necesitas escuchar
                    las instrucciones del GPS, no necesitas quitarte todo el
                    casco, lo que lo hace muy conveniente para la vida en la
                    ciudad.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Compatibilidad con Motonetas
                  </h2>
                  <p>
                    Las motos de poca cilindrada suelen usarse para trayectos
                    cortos y a velocidades más bajas. En estos escenarios, la
                    protección adicional que ofrecen los cascos integrales
                    podría considerarse excesiva para algunos conductores.
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
                    Menor Protección Facial
                  </h2>
                  <p>
                    No ofrecen protección completa para la cara y la mandíbula,
                    lo que podría ser un riesgo en caso de un accidente.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Exposición a Elementos Externos
                  </h2>
                  <p>
                    Estás más expuesto al viento, el polvo y los insectos, lo
                    que puede ser molesto o incluso peligroso en ciertas
                    condiciones.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Niveles de Ruido
                  </h2>
                  <p>
                    Al no tener una cubierta completa, los cascos abiertos
                    suelen ser más ruidosos, lo que podría ser un problema en
                    viajes más largos o para personas sensibles al ruido.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Certificaciones de Seguridad
                  </h2>
                  <p>
                    Si bien muchos cascos abiertos cuentan con certificaciones
                    de seguridad, es más difícil encontrar modelos que cumplan
                    con los estándares más rigurosos debido a su diseño abierto.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Precio vs Características
                  </h2>
                  <p>
                    Aunque puedes encontrar cascos abiertos más económicos, a
                    menudo sacrificas características de seguridad y comodidad
                    en los modelos de menor precio.
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
