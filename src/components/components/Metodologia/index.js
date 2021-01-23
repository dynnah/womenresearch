import React from 'react';
import TriangleRight from '../../../assets/triangle-right.png'
import './index.css'


function Metodologia() {
  return (
      <div className="metodologia">
        <div className="title">
          <p className="titulo">É preciso entender a importância de levantar dados sobre a temática</p>
        </div>
        <div className="sub-title">
          <p className="subtitle">E como isso ajuda na garantia dos direitos fundamentais de mulheres</p>
        </div>
        <div className="full-text">
          <p className="text">A violência contra a mulher é uma realidade presente desde muito tempo não só no nosso país, como no mundo todo. Devido à esse grave problema em nossa sociedade, com o tempo, pesquisas e relatórios foram realizados para fazer um levantamento de dados sobre esse assunto. </p>
          <p className="text">Diversos censos e relatórios são executados no Brasil e no mundo no tocante a essa temática (BUENO, 2020; WOMEN, 2019), que infelizmente é um fenômeno global. A ONU Mulheres apresentou em novembro de 2019 o relatório "O Progresso das Mulheres no Mundo 2019-2020: Famílias em um mundo em mudança" que mostra que 17,8% das mulheres no planeta, ou cerca de uma de cada cinco, relataram violências física ou sexual de seus companheiros nos últimos 12 meses (WOMEN, 2019).</p>
          <p className="text">É preciso entender que as políticas públicas de combate e educação, e as ações de ONGs (Organizações Não Governamentais) têm um impacto relevante no combate desses índices. Por isso, a existência de ferramentas que apoiem o processo de planejamento de ações e entendimento do problema é tão relevante. </p>
        </div>
        <div className="btn-metodologia"> 
          <a href="http://google.com/"><button className="btn-infos">Mais Informações</button></a>
        </div>
        <img className="triangle-right" src={TriangleRight} alt="Triangle"></img>
      </div>
  );
}

export default Metodologia;