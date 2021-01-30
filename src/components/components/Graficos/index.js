import React, { useState } from 'react'
import triangleLeft from '../../../assets/triangle-left.png'
import triangleRight from '../../../assets/triangle-right.png'
import dadosFeminicidioPb from '../../../data/dadosfeminicidio-pb.json'
import violenciaPb from '../../../data/violencia-pb.json'
import etniaBr from '../../../data/etnia-brasil.json'
import anoBr from '../../../data/ano-brasil.json'
import violenciaBr from '../../../data/violencia-brasil.json'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart, Sector
} from 'recharts';
import './index.css'

const cities = ['Joao Pessoa', 'Campina Grande', 'Bayeux', 'Santa Rita', 'Patos']
const dataToChart = cities.map(city => {
	const cases = violenciaPb.filter((element) => element['Município'].toLowerCase().includes(city.toLowerCase()))
	return {
		['Município']: city,
		['Ocorrências']: cases.length
	}
})

const etnias = ['Parda', 'Branca', 'Amarela', 'Preta', 'Não Especificado']
const etniaToChart = etnias.map(etnia => {
	const cases = etniaBr.filter((element) => element['Etnia'].toLowerCase().includes(etnia.toLowerCase()))
	return {
		['Etnia']: etnia,
		['Ocorrências']: cases.length
	}
})

const violencias = ['Violência Física', 'Violência Sexual', 'Violência Psicológica', 'Violência Moral', 'Violência Patrimonial']
const violenciaToChart = violencias.map(violencia => {
	const cases = violenciaBr.filter((element) => element['Ocorrência'].toLowerCase().includes(violencia.toLowerCase()))
	return {
		name: violencia,
		quantidade: cases.length
	}
})

const faixasEtarias = [{min: 15, max: 25}, {min: 26, max: 35}, {min: 36, max: 45}, {min: 46, max: 55}, {min: 56, max: 65}, {min: 66, max: 100} ]
	const ageToChart = faixasEtarias.map(faixaetaria => {
		const cases = dadosFeminicidioPb.filter((element) => element['Idade'] >= faixaetaria.min && element['Idade'] <= faixaetaria.max)
		return {
			['Faixa Etária']: `${faixaetaria.min}-${faixaetaria.max}`,
			['Ocorrências']: cases.length

		}
	})


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


function Graficos() {
	const [activeIndex, setActiveIndex] = useState(0)

	const onPieEnter = (data, index) => {
		setActiveIndex(index)
	};
	
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
					<div className="tipos-violencia">
							<div className="violencia">
								<p className="primeira-linhavl">Ocorrência dos Tipos de Violência:</p>
								<p className="segunda-linhavl">Entre os anos 2009 - 2018</p>
							</div>
							<div className="grafico-violenciabr">
								<PieChart width={800} height={400}>
        					<Pie
										activeIndex={activeIndex}
										activeShape={renderActiveShape}
          					data={violenciaToChart}
          					cx={300}
          					cy={200}
          					innerRadius={140}
          					outerRadius={160}
          					fill="#9B51E0"
										dataKey="quantidade"
										onMouseOver={onPieEnter}
        					/>
      					</PieChart>
							</div>
						</div>
					<hr />
					<div className="etnia">
						<p className="terceira-linha">Etnia mais afetada</p>
						<p className="segunda-linha">Entre os anos 2009 - 2018</p>
						<div className="grafico-etnia">
								<BarChart
        					width={1000}
        					height={500}
        					data={etniaToChart}
        					margin={{
          					top: 5, right: 30, left: 20, bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="Etnia" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar dataKey="Ocorrências" fill="#9B51E0" />
								</BarChart>
							</div>
						<hr />
					</div>
					<div className="dados-pb" id="dados-pb">
						<div className="paraiba">
							<h1>PARAÍBA</h1>
						</div>
						<hr />
						<div className="caso-anopb">
							<p className="primeira-linhapb">Quantidade de casos por Município:</p> 
							<p className="segunda-linhavl">No ano de 2020</p>
							<div className="grafico-municipiopb">
								<BarChart
        					width={1000}
        					height={500}
        					data={dataToChart}
        					margin={{
          					top: 5, right: 30, left: 20, bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="Município" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar dataKey="Ocorrências" fill="#9B51E0" />
								</BarChart>
							</div>
						</div>
						<hr />

						<div className="faixaetaria-pb">
							<div className="">
								<p className="terceira-linha">Faixa etária mais afetada</p>
								<p className="segunda-linhavl">No ano de 2020</p>
							</div>
							<div className="grafico-idadepb">
								<BarChart
        					width={1000}
        					height={500}
        					data={ageToChart}
        					margin={{
          					top: 5, right: 30, left: 20, bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="Faixa Etária" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar dataKey="Ocorrências" fill="#9B51E0" />
								</BarChart>
							</div>
							
							
						</div>
					<hr />

				</div>
				<img className="triangle-right" src={triangleRight} alt="triangles"></img>
      </div>
  );
}

export default Graficos;