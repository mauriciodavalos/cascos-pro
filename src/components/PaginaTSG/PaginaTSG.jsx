import React from 'react';
import PropTypes from 'prop-types';

const PaginaTSG = ({ title, subtitle, paragraph, imageUrl }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <h2>{subtitle}</h2>
      {imageUrl ? <img src={imageUrl} alt={title} /> : null}
    </div>
  );
};

PaginaTSG.propTypes = {};

export default PaginaTSG;
