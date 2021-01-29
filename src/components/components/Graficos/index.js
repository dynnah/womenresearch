import React from 'react';
import triangleLeft from '../../../assets/triangle-left.png'
import triangleRight from '../../../assets/triangle-right.png'
import './index.css'


function Graficos() {
  return (
      <div className="graficos" id="dados">
          <div className="texto-inicial">
            <h1 className="texto-principal">OS DADOS SÃO NÚMEROS</h1>
            <p className="texto-secundario">e os números são nomes</p>
            <p className="tagline">A violência contra a mulher é um grande problema social e as consequências podem ser duradouras</p>
						<img className="triangle-left" src={triangleLeft} alt="triangles"></img>
          </div>
					<div className="brasil">
						<h1>BRASIL</h1>
						<hr />
					</div>
					<div className="caso-ano">
							<div className="before-select">
								<p className="primeira-linha">Quantidade de casos por ano:</p> 
								<p className="segunda-linha">A cada 100 mil habitantes</p>
							</div>
							<div className="select">
								<select name="format" id="format">
									<option selected disabled>Selecione o ano</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
								</select>
							</div>
						</div>
					<hr />
					<div className="tipos-violencia">
							<div className="before-select">
								<p className="primeira-linha">Tipos de violência:</p>
							</div>
							<div className="select">
								<select name="format" id="format">
									<option selected disabled>Selecione o tipo</option>
									<option value="fisica">Violência Física</option>
									<option value="psicologica">Violência Psicológica</option>
									<option value="moral">Violência Moral</option>
									<option value="sexual">Violência Sexual</option>
									<option value="patrimonial">Violência Patrimonial</option>
								</select>
							</div>
							<div className="before-select">
								<p className="primeira-linha">Ano:</p>
							</div>
							<div className="select">
								<select name="format" id="format">
									<option selected disabled>Selecione o ano</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
								</select>
							</div>
						</div>
					<hr />
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
					<div className="dados-pb" id="dados-pb">
						<div className="brasil">
							<h1>PARAÍBA</h1>
							<hr />
						</div>
						<div className="caso-ano">
							<div className="before-select">
								<p className="primeira-linha">Quantidade de casos por ano:</p> 
								<p className="segunda-linha">A cada 100 mil habitantes</p>
							</div>
							<div className="select">
								<select name="format" id="format">
									<option selected disabled>Selecione o ano</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
								</select>
							</div>
						</div>
						<hr />
						<div className="tipos-violencia">
							<div className="before-select">
								<p className="primeira-linha">Tipos de violência:</p>
							</div>
							<div className="select">
								<select name="format" id="format">
									<option selected disabled>Selecione o tipo</option>
									<option value="fisica">Violência Física</option>
									<option value="psicologica">Violência Psicológica</option>
									<option value="moral">Violência Moral</option>
									<option value="sexual">Violência Sexual</option>
									<option value="patrimonial">Violência Patrimonial</option>
								</select>
							</div>
							<div className="before-select">
								<p className="primeira-linha">Ano:</p>
							</div>
							<div className="select">
								<select name="format" id="format">
									<option selected disabled>Selecione o ano</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
								</select>
							</div>
						</div>
					<hr />

				</div>
				<img className="triangle-right" src={triangleRight} alt="triangles"></img>
      </div>
  );
}

export default Graficos;