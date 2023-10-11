import React from 'react';
import PropTypes from 'prop-types';

const ClusterMarcas = ({}) => {
  return (
    <div className="flex mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-[7vh] z-0 mb-2">
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/logoAGV.png" alt="Logo AGV" className="w-[70%]" />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/shoeilogo.png" alt="Logo Shoei" className="w-[95%]" />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img
            src="/imgs/schubertlogo.png"
            alt="Logo Schubert"
            className="w-[95%]"
          />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/arailogo.png" alt="Logo Arai" className="w-[90%]" />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/nolanlogo.png" alt="Logo Nolan" className="w-[95%]" />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/sharklogo.png" alt="Logo Shark" className="w-[80%]" />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/hjclogo.png" alt="Logo HJC" className="w-[95%]" />
        </div>
        <div className="w-[10rem] h-[4rem] bg-white flex flex-col items-center justify-center p-2">
          <img src="/imgs/belllogo.png" alt="Logo " className="w-[95%]" />
        </div>
      </div>
    </div>
  );
};

ClusterMarcas.propTypes = {};

export default ClusterMarcas;
