import React, { Component } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ExternalResourceModal from './ExternalResourceModal';
import LayersList from './LayersList.js'

export class Mapa extends Component {

  constructor (props) {
    super(props);
    this.state = {
      geoJSON: null,
      wmsTileLayer: null,
      loading: false
    }
  }

  /* Definición de estilos del mapa */
  style = {
    height: 600,
    margin: 10,
  };

  activateSpinner = signal => {
    this.setState({
      loading: signal
    })
  }

  insertWms = wms => {
    this.setState({
      wmsTileLayer: wms,
    })
    this.activateSpinner(false);
  }

  insertGeoJSON = geojson => {
    this.setState({
      geoJSON: geojson
    })
    this.activateSpinner(false);
  }


  render() {

    return (
      <div>
        <div id="viewer">
          <div className="m-2">
              <LayersList type="geojson" onClickHandler={this.insertGeoJSON} onSpinnerLoading={this.activateSpinner}/>
              <ExternalResourceModal onClickHandler={this.insertWms} onSpinnerLoading={this.activateSpinner} />
          </div>
          <MapContainer center={[38, -1]} zoom="5" style={this.style}>
            <ScaleControl />
            <LayersControl>
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
              {/* Aquí se pintan las capas externas */}
              { this.state.wmsTileLayer ? this.state.wmsTileLayer : false }
              { this.state.geoJSON ? this.state.geoJSON : false }
          </MapContainer>
        </div>
        { this.state.loading ? <div className="spinner spinner-border text-primary" role="status">
          <span className="sr-only">Cargando...</span>
        </div> : false}
      </div>
    );
  }
}


export default Mapa;

