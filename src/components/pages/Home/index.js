import React from 'react';
import Logo from '../../../assets/Logo.png'
import TriangleUp from '../../../assets/triangle-up.png'
import Leis from '../../components/Leis';
import Metodologia from '../../components/Metodologia';
import './index.css'


function Home() {
  return (
    <div>
      <div>
        <div className="home">
          <div className="tagline">
            <p className="tagline-text">ESCLARECENDO E EVIDENCIANDO DADOS SOBRE VIOLÊNCIA CONTRA A MULHER NO BRASIL</p>
            <img className="triangle-up" src={TriangleUp} alt="Triangle"></img>
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