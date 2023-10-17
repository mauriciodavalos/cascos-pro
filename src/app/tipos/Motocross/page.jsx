/** @type {NextPage} */
const Page = () => {
  const helmets = [
    {
      name: 'Fox Racing V3',
      features: [
        'Excelente ventilación a través de múltiples aberturas',
        'Diseño ligero para mayor comodidad',
        'Tecnología MIPS para protección contra impactos rotacionales',
        'Visera ajustable',
      ],
      safetyStandards: 'DOT y ECE',
      accessories:
        'Viseras adicionales, almohadillas de mejilla de diferentes tamaños',
    },
    {
      name: 'Alpinestars Supertech M10',
      features: [
        'Sistema de rotación del forro interior para protección adicional',
        'Calota de fibra de carbono',
        'Sistema de liberación de emergencia',
        'Visera ajustable',
      ],
      safetyStandards: 'DOT y ECE',
      accessories: 'Viseras adicionales, almohadillas interiores opcionales',
    },
    {
      name: 'Troy Lee Designs SE4',
      features: [
        'Equilibrio entre peso y seguridad',
        'Visera ajustable',
        'Múltiples ventilaciones para flujo de aire',
        'Forro EPS de triple densidad',
      ],
      safetyStandards: 'DOT y ECE',
      accessories: 'Viseras adicionales, almohadillas de mejilla opcionales',
    },
    {
      name: 'Shoei VFX-EVO',
      features: [
        'Robustez y alta capacidad para absorber impactos',
        'Tecnología M.E.D.S. (Motion Energy Distribution System)',
        'Sistema de ventilación eficaz',
        'Forro interior desmontable y lavable',
      ],
      safetyStandards: 'DOT y ECE',
      accessories: 'Viseras de repuesto, almohadillas de mejilla adicionales',
    },
    {
      name: 'Bell Moto-9 Carbon Flex',
      features: [
        'Confort y ajuste excepcionales',
        'Sistema de desmontaje rápido en caso de emergencia',
        'Calota de fibra de carbono',
        'Forro EPS de múltiple densidad',
      ],
      safetyStandards: 'DOT y ECE',
      accessories: 'Viseras adicionales, sistema de comunicación opcional',
    },
  ];

  return (
    <>
      <section className="grid">
        <div className="flex justify-center items-center bg-black bg-cover bg-center min-h-screen">
          <div>
            <p className="font-bold text-center text-5xl text-white z-0 mt-[200px]">
              Ideales para la Aventura Off-Road
            </p>
            <h1 className="font-bold text-center text-2xl text-white z-0 mt-5">
              Cascos de Motocross
            </h1>
            <button className="px-4 py-2 font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded-none cursor-pointer z-0 mt-[5vh] flex mx-auto">
              Top Mejores <br />
              Mejores Cascos de Motocross del 2023
            </button>
            <p className="text-lg text-white z-0 mt-5 text-justify p-2 lg:w-[40%] mr-2 ml-2 lg:mx-auto">
              El motocross es un deporte extremo que requiere un nivel de
              equipamiento específico para garantizar tanto el rendimiento como
              la seguridad. Uno de los elementos más cruciales es el casco. Pero
              no cualquier casco sirve cuando se trata de motocross y la
              conducción offroad. En este artículo, exploraremos por qué los
              cascos diseñados para motocross son la opción ideal para cualquier
              aventura fuera de la carretera.
            </p>
          </div>
        </div>
      </section>
      <section className="grid lg:w-[60%] mx-auto">
        <div className=" bg-gray-100 rounded-lg shadow mt-5">
          <p className="font-bold text-center text-3xl mt-10">
            Caracteristicas Principales de los cascos de Enduro
          </p>
          <h3 className="font-bold text-5xl mt-10 mr-2 ml-2 lg:mx-auto">
            Ventajas
          </h3>
          <div className="flex">
            <div className="mt-5 items-center mb-3 mx-auto p-10">
              <ul className="list-disc">
                <li className="text-base">
                  <h2 className="font-semibold text-lg mb-2">
                    Ventilación Superior
                  </h2>
                  <p>
                    En el intenso y físico mundo del motocross, la ventilación
                    es clave. Los cascos de motocross están diseñados con
                    múltiples entradas y salidas de aire para maximizar el flujo
                    de aire, manteniéndote fresco durante las competiciones
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Campo de Visión
                  </h2>
                  <p>
                    Los cascos de motocross ofrecen un amplio campo de visión
                    para que puedas ver claramente los obstáculos y otros
                    competidores cuando estés en el circuito. A menudo cuentan
                    con viseras ajustables para adaptarse a diferentes
                    condiciones de luz y terreno.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">Peso Ligero</h2>
                  <p>
                    Dado que el motocross requiere una gran cantidad de
                    movimiento y flexibilidad, estos cascos están diseñados para
                    ser lo más ligeros posible sin sacrificar la protección.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Protección Facial y de Barbilla
                  </h2>
                  <p>
                    Muchos cascos de motocross vienen con un protector facial y
                    de barbilla incorporado para protegerte contra ramas,
                    piedras y otros desechos durante la conducción offroad.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Material Resistente y Ajuste Seguro
                  </h2>
                  <p>
                    Fabricados con materiales como fibra de carbono y polímeros
                    de alta resistencia, los cascos de motocross están hechos
                    para resistir impactos fuertes y ofrecer la máxima
                    protección.
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
                    Limitada Versatilidad
                  </h2>
                  <p>
                    Están diseñados específicamente para motocross y offroad, lo
                    que significa que no son la mejor opción para otro tipo de
                    conducción como en la carretera o en la ciudad.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Limitada Protección Contra el Clima
                  </h2>
                  <p>
                    Estos cascos no ofrecen la misma protección contra elementos
                    como la lluvia y el viento frío en comparación con los
                    cascos integrales.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Falta de Accesorios
                  </h2>
                  <p>
                    Muchos modelos no vienen con características como Bluetooth
                    o sistemas de comunicación incorporados, que podrían ser
                    útiles para aquellos que desean mantenerse conectados.
                  </p>
                </li>
                <li>
                  <h2 className="font-semibold text-lg mb-2">Inconveniencia</h2>
                  <p>
                    Ponerse y quitarse un casco de Enduro puede ser más
                    engorroso en comparación con otros tipos de cascos. Esto
                    puede resultar inconveniente para aquellos que hacen paradas
                    frecuentes.
                  </p>
                </li>

                <li>
                  <h2 className="font-semibold text-lg mb-2">
                    Falta de Accesorios
                  </h2>
                  <p>
                    Muchos modelos no vienen con características como Bluetooth
                    o sistemas de comunicación incorporados, que podrían ser
                    útiles para aquellos que desean mantenerse conectados.
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
