import React, { Component } from "react";
import geojsonRepository from "../../assets/system/GeojsonRepository";
import axios from 'axios';
import L from 'leaflet'
import { GeoJSON } from 'react-leaflet';
import SelectedListItem from "../../assets/reactMaterialComponents/SelectedListItem";

export class LayersList extends Component {

	sendGeojson = async geojson => {
		// Aquí se monta el geojson que se manda al padre map
		this.props.onSpinnerLoading(true);
		let resultado = await axios.get(geojson.url);
		let capa = <GeoJSON key={geojson.id} data={resultado.data} attribution={geojson.attribution} pointToLayer={this.generateSymbology} onEachFeature={(feature, layer) => this.generatePopUp(feature, layer, geojson.id_2)}/>
		this.props.onClickHandler(capa);
	};
	
	// Estilos capas
	symbology = {
		color: "blue",
		fillColor: "blue",
		radius: 3,
		opacity: 1,
		fillOpacity: 1
	};


	generateSymbology = (feature, latlng) => {
		return L.circleMarker(latlng, this.symbology);
	};

	generatePopUp = (feature, layer, id_2) => {
		if (id_2 === 'hospitales') {
			if(feature.properties && feature.properties.NOMBRE && feature.properties.DIRECCION && feature.properties.MUNICIPIOS && feature.properties.PROVINCIAS && feature.properties.TELEFONO) {
				layer.bindPopup(`<strong>Nombre</strong>: ${feature.properties.NOMBRE} <br/><strong>Dirección</strong>: ${feature.properties.DIRECCION} <br/> 
				<strong>Municipio</strong>: ${feature.properties.MUNICIPIOS} (${feature.properties.PROVINCIAS})<br/><strong>Teléfono</strong>: ${feature.properties.TELEFONO}`)
			}
		} else if (id_2 === 'guardia_civil') {
			if(feature.properties && feature.properties.UNIDAD && feature.properties.LOCALIDAD && feature.properties.DOMICILIO && feature.properties.PROVINCIA && feature.properties.TELEFONO) {
				layer.bindPopup(`<strong>Unidad</strong>: ${feature.properties.UNIDAD} <br/><strong>Domicilio</strong>: ${feature.properties.DOMICILIO} <br/> 
				<strong>Localidad</strong>: ${feature.properties.LOCALIDAD} (${feature.properties.PROVINCIA})<br/><strong>Teléfono</strong>: ${feature.properties.TELEFONO}`)
			}
		}
	}
  
	render() {
		return (
			<div>
				<div className="title-panel">
					<h4>Listado de capas disponibles</h4>
				</div>
					<SelectedListItem geoRepository={geojsonRepository} sendGeojson={this.sendGeojson}/>
			</div>
		);
	}
}

export default LayersList;
