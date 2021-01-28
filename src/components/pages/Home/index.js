import React from 'react';
import Logo from '../../../assets/Logo.png'
import Metodologia from '../../components/Metodologia';
import Leis from '../../components/Leis';
import Graficos from '../../components/Graficos'
import chevronDown from '../../../assets/Desing.png'
import triangleUp from '../../../assets/triangle-up.png'
import './index.css'


function Home() {
  return (
    <div>
      <div>
        <div>
          <div className="home">
            <div className="tagline">
              <p className="tagline-text">ESCLARECENDO E EVIDENCIANDO DADOS SOBRE VIOLÊNCIA CONTRA A MULHER NO BRASIL</p>
              <a className="chevron" href="#metodologia"><img className="chevron" src={chevronDown} alt="Arrow Down"></img></a>
            </div>        
            <div className="logo">
              <img className="img-logo" src={Logo} alt="Logo"></img>
            </div>
            <img className="triangle-up" src={triangleUp} alt="triangles"></img>
          </div>
          <Metodologia />
        </div>
          <Leis />
      </div>
      <Graficos />
    </div>  
  );
}

export default Home;