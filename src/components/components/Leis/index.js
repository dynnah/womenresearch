import React from 'react';
import Carrossel from '../Carrossel'
import './index.css'


function Leis() {
  return (
      <div className="leis">
        <div className="leis-title">
          <p className="leis-titulo">Lei Maria da Penha</p>
        </div>
        <div className="leis-subtitle">
          <p className="leis-sub-titulo">No Capítulo II, art. 7º, incisos I, II, III, IV e V, estão previstos cinco tipos de violência doméstica e familiar contra a mulher:</p>
        </div>
        <div className="carrossel">
          <Carrossel />
        </div>
        
      </div>
  );
}

export default Leis;