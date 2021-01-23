import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './index.css'


function Carrossel() {
  return (
    <div className="App">
      <Carousel>
        <Item>
          <h1 className="h1-item">Violência Fisica</h1>
          <p className="p-item">Entendida como qualquer conduta que ofenda a integridade ou saúde corporal da mulher.<br/>Exemplos: Espacamento; Atirar objetos, sacudir e apertar os braços; Estragulamento ou sufocamento; Lesões com objetivos cortantes ou perfurantes; Ferimentos causados por queimaduras ou armas de fogo; Tortura;</p>
        </Item>
        <Item>
          <h1 className="h1-item">Violência Psicológica</h1>
          <p className="p-item">É considerada qualquer conduta que: cause dano emocional e diminuição da autoestima; prejudique e perturbe o pleno desenvolvimento da mulher; ou vise degradar ou controlar suas ações, comportamentos, crenças e decisões.<br/>Exemplos: Ameaças; Constrangimento; Humilhação; Manipulação; Vigilância Constante; Insultos; Chantagem; Exploração; Limitação do direito de ir e vir; Ridicularização; Gaslighthing.</p>
        </Item>
        <Item>
          <h1 className="h1-item">Violência Moral</h1>
          <p className="p-item">Trata-se de qualquer conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força.<br/>Exemplos: Estupro; Obrigar a mulher a fazer atos sexuais que causam desconforto ou repulsa; Impedir o uso de métodos contraceptivos ou forçar a mulher a abortar; Forçar matrimônio, gravidez ou prostituição por meio de coação, chantagem, suborno ou manipulação; Limitar ou anular o exercício dos direitos sexuais e reprodutivos da mulher.</p>
        </Item>
        <Item>
          <h1 className="h1-item">Violência Sexual</h1>
          <p className="p-item">Entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.<br/>Exemplos: Controlar o dinheiro; Deixar de pagar pensão alimentícia; Destruição de documentos pessoais; Furto, extorsão ou dano; Estelionato; Privar de bens, valores ou recursos econômicos; Causar danos propositais a objetos da mulher ou dos quais ela goste.</p>
        </Item>
        <Item>
          <h1 className="h1-item">Violência Patriomonial</h1>
          <p className="p-item">É considerada qualquer conduta que configure calúnia, difamação ou injúria.<br/>Exemplos: Acusar a mulher de traição; Emitir juízos morais sobre a conduta; Fazer críticas mentirosas; Expor a vida íntima; Rebaixar a mulher por meio de xingamentos que incidem sobre a sua índole; Desvalorizar a vítima pelo seu modo de se vestir.</p>
        </Item>
      </Carousel>
    </div>
  );
}

export default Carrossel
