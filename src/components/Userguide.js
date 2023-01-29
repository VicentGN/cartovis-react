import React, { Component } from "react";

export class Userguide extends Component {
  render() {
    return (
      <div className="container animated fadeIn">
        <h2 className="text-center mt-5">Cómo utilizar CartoVis</h2>
        <p className="text-center mt-3">
          <p>Cartovis es un visor que muestra capas de información geográfica. Su panel lateral izquierdo permite cargar capas.</p>
          <p>Para ello, el botón <i>Añadir Recurso Externo</i> permite la carga de recursos
          propiedad de instituciones y/o organismos de carácter público y que se encuentran también publicados en sus respectivas webs.</p>
          <p>El desarrollador se responsabiliza de la información publicada. De hecho, este proyecto es sin ánimo de lucro y con un objetivo claramente educativo.
          </p>
        </p>
      </div>
    );
  }
}

export default Userguide;
