/** @type {NextPage} */
const Page = () => {
  const helmets = [
    {
      name: 'AGV - Pista GP RR',
      features: [
        'Diseñado para la MotoGP™',
        'Calota de 100% fibra de carbono',
        'Visión panorámica de 190° y vertical de 85°',
        'Sistema Adaptive Fit de 360° para ajuste personalizado',
      ],
      safetyStandards: 'Homologación FIM y ECE22.06',
      accessories:
        'Sistema de hidratación, kit de personalización del interior, kit de pantalla despegable, cubiertas para aberturas de ventilación',
    },
    {
      name: 'Shoei - X-Fourteen',
      features: [
        'Diseñado para competición',
        'Calota de AIM+ (Advanced Integrated Matrix Plus Multi Fiber)',
        'Visor CWR-F con protección anti-vaho',
        'Ajuste personalizable con almohadillas interiores',
      ],
      safetyStandards: 'Snell M2020, DOT',
      accessories:
        'Sistema de liberación de emergencia, diferentes tamaños de almohadillas, visores opcionales',
    },
    {
      name: 'Arai - Corsair-X',
      features: [
        'Orientado al confort',
        'Calota de fibra de vidrio',
        'Sistema de ventilación de alto rendimiento',
        'Ajuste facial personalizable',
      ],
      safetyStandards: 'Snell M2020, DOT',
      accessories:
        'Spoilers opcionales, varias pantallas, sistema de liberación de emergencia',
    },
    {
      name: 'HJC - RPHA 11 Pro',
      features: [
        'Diseño aerodinámico',
        'Calota de PIM+ (Premium Integrated Matrix Plus)',
        'Ventilación superior e inferior ajustable',
        'Interior antibacteriano',
      ],
      safetyStandards: 'ECE22.05, DOT',
      accessories:
        'Visores opcionales, sistema de liberación rápida, almohadillas para mejillas adicionales',
    },
    {
      name: 'Bell - Race Star Flex DLX',
      features: [
        'Versatilidad para diferentes tipos de conducción',
        'Calota de 3K de fibra de carbono',
        'Pantalla Panovision con campo de visión ampliado',
        'Sistema Flex de gestión de energía de impacto',
      ],
      safetyStandards: 'Snell M2020, DOT',
      accessories:
        'Diferentes visores, sistema ProTint, almohadillas adicionales',
    },
  ];

  return (
    <>
      <section className="grid">
        <div className="flex justify-center items-center bg-black bg-cover bg-center min-h-screen">
          <div>
            <p className="font-bold text-center text-5xl text-white z-0 mt-[200px]">
              Ideales para Motociclismo Deportivo
            </p>
            <h1 className="font-bold text-center text-2xl text-white z-0 mt-5">
              Cascos Integrales
            </h1>
            <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh] flex mx-auto">
              Top Mejores <br />
              Mejores Cascos Integrales del 2023
            </button>
            <p className="text-lg text-white z-0 mt-5 text-justify p-2 lg:w-[40%] mr-2 ml-2 lg:mx-auto">
              Las motos deportivas son conocidas por su alto rendimiento,
              velocidad y maniobrabilidad, lo que las convierte en una opción
              emocionante para los entusiastas de la conducción. Sin embargo,
              estas características también implican un conjunto único de
              riesgos y desafíos en términos de seguridad. Aquí es donde los
              cascos integrales entran en juego como la mejor opción de
              protección.
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
                    Cobertura Completa
                  </h2>
                  <p>
                    Los cascos integrales ofrecen una cobertura completa del
                    rostro y la cabeza, lo cual es fundamental cuando se conduce
                    a altas velocidades, como es típico en las motos deportivas.
                    Esta cobertura completa minimiza los riesgos en caso de
                    impacto o deslizamiento.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Aerodinámica</h2>
                  <p>
                    El diseño aerodinámico de los cascos integrales es
                    especialmente beneficioso para motos deportivas, donde la
                    velocidad y la resistencia al viento son factores críticos.
                    Estos cascos están diseñados para reducir la resistencia del
                    aire, permitiéndote mantener el control incluso a
                    velocidades más altas.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Visión</h2>
                  <p>
                    La mayoría de los cascos integrales cuentan con viseras de
                    alta claridad que ofrecen un campo de visión amplio, lo cual
                    es crucial para maniobrar de manera segura en una moto
                    deportiva.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Reducción del Ruido
                  </h2>
                  <p>
                    El diseño envolvente de los cascos integrales ayuda a
                    reducir el ruido del viento y del motor, lo que permite una
                    mejor concentración y reduce la fatiga durante los viajes
                    largos.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Confort y Ventilación
                  </h2>
                  <p>
                    Aunque la protección es la prioridad, el confort también es
                    esencial. Los cascos integrales modernos vienen con sistemas
                    de ventilación eficientes que mantienen el flujo de aire,
                    crucial para viajes a altas velocidades en motos deportivas.
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
                  <h2 className="font-semibold text-lg mb-2">Peso</h2>
                  <p>
                    Los cascos integrales suelen ser más pesados que otros tipos
                    debido a la cobertura y protección adicional que ofrecen.
                    Este peso adicional puede causar fatiga durante viajes más
                    largos.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Calor</h2>
                  <p>
                    Aunque muchos cascos integrales modernos ofrecen sistemas de
                    ventilación eficaces, aún pueden resultar más cálidos que
                    otros tipos de cascos, especialmente en climas cálidos o
                    durante el verano.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Precio</h2>
                  <p>
                    Por lo general, los cascos integrales son más costosos que
                    sus contrapartes, como los cascos de cara abierta o los de
                    media cara. Esto se debe a la cantidad de material y la
                    tecnología avanzada que a menudo incorporan.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Inconveniencia</h2>
                  <p>
                    Ponerse y quitarse un casco integral puede ser más engorroso
                    en comparación con otros tipos de cascos. Esto puede
                    resultar inconveniente para aquellos que hacen paradas
                    frecuentes.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Aislamiento</h2>
                  <p>
                    La protección contra el ruido es una ventaja, pero también
                    puede ser una desventaja si prefieres estar más consciente
                    de los sonidos del entorno, como el tráfico cercano o las
                    señales de emergencia.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-[50%] mx-auto">
        <h3 className="font-bold text-5xl mt-10 mr-2 ml-2 lg:mx-auto">
          Top 5 Mejores Cascos Integrales del 2023
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
