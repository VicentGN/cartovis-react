import React, { Component } from "react";

export class Userguide extends Component {
  render() {
    return (
      <div className="container animated fadeIn">
        <h2 className="text-center mt-5">Cómo utilizar CartoVis</h2>
        <p className="text-center mt-3">
          <p>Cartovis es un visor que muestra capas de información geográfica. Su panel lateral izquierdo permite, con un sólo click, cargar una capa de una temática específica. Al cargarse esa capa, es posible clicar en un elemento y obtener más información.</p>
          <p>Actualmente, Cartovis posee capas de localización de hospitales y puestos de la Guardia Civil. Progresivamente se irán añadiendo de nuevas.</p>
          <p>También es posible visualizar servicios WMS/WMTS en este visor. El botón <i>Añadir Recurso Externo</i> permite la carga de ortofotos
          propiedad de instituciones y/o organismos de carácter público y que se encuentran también publicados en sus respectivas webs.</p>
          <p>Igualmente, destacar que los datos de las capas (Hospitales y Guardia Civil) proceden de ArcGIS y que, en ningún momento, el desarrollador se responsabiliza de la información publicada.
            De hecho, este proyecto es sin ánimo de lucro y con un objetivo claramente educativo.
          </p>
        </p>
      </div>
    );
  }
}

export default Userguide;
