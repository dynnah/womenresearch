import React from 'react'
import Facebook from '../../../assets/Facebook.png'
import Instagram from '../../../assets/Instagram.png'
import Twitter from '../../../assets/Twitter.png'
import './index.css'

function Footer() {
  return (
      <div class="footer" id="contatos">
         <div className="footer-infos">
             <p className="texto-denuncia"><span>Caso você tenha sofrido algum tipo de violência, faça uma denúncia!</span><span>Clique em um dos botões ao lado para ser redirecionada.</span></p>
             <div className="info-btn">
             <a href="http://google.com/"><button className="delegacia">Delegacia Virtual</button></a>
             <a href="http://google.com/"><button className="disk-180">Ligue 180</button></a>
             </div>
             
         </div>
         <div className="footer-share">
             <p>compartilhe o projeto</p>
             <a href="http://google.com/"><button className="icons"><img className="icones" src={Facebook} alt="Facebook Logo"></img></button></a>
             <a href="http://google.com/"><button className="icons"><img className="icones" src={Instagram} alt="Instagram Logo"></img></button></a>
             <a href="http://google.com/"><button className="icons"><img className="icones" src={Twitter} alt="Twitter Logo"></img></button></a>
             
             <hr />

             <p className="last-line">© Violência contra a mulher, Inc. 2021. </p>

         </div>
      </div>
  );
}

export default Footer;