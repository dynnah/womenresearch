import React from 'react';
import Logo from '../../../assets/Logo.png'
import Leis from '../../components/Leis';
import Metodologia from '../../components/Metodologia';
import chevronDown from '../../../assets/Desing.png'
import './index.css'


function Home() {
  return (
    <div>
      <div>
        <div className="home">
          <div className="tagline">
            <p className="tagline-text">ESCLARECENDO E EVIDENCIANDO DADOS SOBRE VIOLÊNCIA CONTRA A MULHER NO BRASIL</p>
            <button className="chevron"><img className="chevron" src={chevronDown} alt="Arrow Down"></img></button>
          </div>        
          <div className="logo">
            <img className="img-logo" src={Logo} alt="Logo"></img>
          </div>
        </div>
        <Metodologia />
      </div>
        <Leis />
    </div>  
  );
}

export default Home;