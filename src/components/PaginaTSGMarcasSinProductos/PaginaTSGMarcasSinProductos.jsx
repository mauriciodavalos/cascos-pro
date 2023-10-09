import React from 'react';
import PropTypes from 'prop-types';

const PaginaTSGMarcasSinProductos = ({
  title,
  paragraph,
  subtitle,
  imageUrl,
}) => {
  return (
    <div>
      <h1 className="font-bold text-center text-5xl">{title}</h1>

      <p className="text-1xl z-0 mt-5 text-lg sm:text-left p-2 lg:w-[40%]">
        {paragraph}
      </p>
      <button className="mx-auto block font-semibold bg-[#f97316] text-black hover:bg-[#CEFF00] rounded cursor-pointer px-10 py-6 m-10">
        Ver Cascos para Moto Certificados
      </button>
      {imageUrl ? <img src={imageUrl} alt={title} /> : null}
      <h2 className="font-semibold text-2xl">{subtitle}</h2>
    </div>
  );
};

PaginaTSGMarcasSinProductos.propTypes = {};

export default PaginaTSGMarcasSinProductos;
