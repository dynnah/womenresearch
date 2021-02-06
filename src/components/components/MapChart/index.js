import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import highchartsMap from "highcharts/modules/map"
import proj4 from "proj4"
import brasilMap from '@highcharts/map-collection/countries/br/br-all.geo.json'
import dadosEstados from "../../../data/estados.json";

highchartsMap(Highcharts);

const data = brasilMap.features.map(state => {
  const { name, latitude, longitude } = state.properties
  const ocorrencias = dadosEstados.filter(dado => dado.Estado === name)
  return {
    name,
    z: ocorrencias.length / dadosEstados.length,
    value: ocorrencias.length,
    lat: parseFloat(latitude),
    lon: parseFloat(longitude),
  }
})

console.log(data)

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const mapOptions = {
  chart: {
    map: 'countries/br/br-all',
    backgroundColor: 'transparent',
    width: 800,
  },
  title: {
    text: ''
  },
  credits: {
      enabled: false
  },
  mapNavigation: {
    enabled: true
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "Ocorrências: {point.value}"
  },
  series: [{
    // Use the gb-all map with no data as a basemap
    name: 'Basemap',
    mapData: brasilMap,
    borderColor: '#A0A0A0',
    nullColor: 'rgba(200, 200, 200, 0.3)',
    backgroundColor: '#9b51e0',
    showInLegend: false,
    dataLabels: {
      enabled: true,
      format: '{point.name}'
    },
  },{
    animation: {
      duration: 1000
    },
    type: 'mapbubble',
    name: 'Ocorrências',
    color: "#9b51e0",
    data: data,
    states: {
        hover: {
            color: '#9b51e0'
        }
    },
}]
}


const MapChart = () => {
  return (
    <HighchartsReact
      constructorType ={'mapChart'}
      highcharts={Highcharts}
      options={mapOptions}
    />
  )
}


export default MapChart
