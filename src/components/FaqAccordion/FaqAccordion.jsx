'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FaqAccordion = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-md w-full">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      {faqData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-md my-2 shadow">
          <h3
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer text-lg font-medium hover:text-blue-500">
            {item.name}
          </h3>
          {openIndex === index && (
            <p className="faq-answer mt-2 text-gray-700">
              {item.acceptedAnswer.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

FaqAccordion.propTypes = {};

export default FaqAccordion;
