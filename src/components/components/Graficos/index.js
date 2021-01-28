import React from 'react';
import './index.css'


function Graficos() {
  return (
      <div className="graficos" id="dados">
          <div className="texto-inicial">
            <h1 className="texto-principal">OS DADOS SÃO NÚMEROS</h1>
            <p className="texto-secundario">e os números são nomes</p>
            <p className="tagline">A violência contra a mulher é um grande problema social e as consequências podem ser duradouras</p>
          </div>
					<div className="brasil">
						<h1>BRASIL</h1>
						<hr />
					</div>
					<div className="caso-ano">
						<p className="primeira-linha">Quantidade de casos por ano:</p>
						<p className="segunda-linha">A cada 100 mil habitantes</p>
						<hr />
					</div>
					<div className="tipos-violencia">
						<p className="primeira-linha">Tipos de violência:</p>
						<p className="primeira-linha">Ano:</p>
						<hr />
					</div>
					<div className="faixa-etaria">
						<p className="terceira-linha">Faixa etária mais afetada</p>
						<hr />
					</div>
					<div className="etnia">
						<p className="terceira-linha">Etnia mais afetada</p>
						<hr />
					</div>
					<div className="faixa-e-etnia">
						<p className="terceira-linha">Faixa Etária versus Etnia</p>
						<hr />
					</div>
					<div className="autores">
						<p className="terceira-linha">Quem comete esses crimes?</p>
						<hr />
					</div>
      </div>
  );
}

export default Graficos;