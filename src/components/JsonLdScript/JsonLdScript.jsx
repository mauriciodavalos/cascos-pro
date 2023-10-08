import React from 'react';
import PropTypes from 'prop-types';
const JsonLdScript = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

JsonLdScript.propTypes = {};

export default JsonLdScript;
