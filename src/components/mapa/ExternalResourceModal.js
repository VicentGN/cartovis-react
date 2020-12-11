import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap';
import ExternalResources from './../../assets/system/ExternalResources';
import Select from 'react-select';
import { TileLayer } from 'react-leaflet'


function ExternalResourceModal(props) {

  // Definimos e inicializamos las variables del estado del componente funcional
  const [show, setShow] = useState(false);
  const [type, setType] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [originOptions, setOriginOptions] = useState([])

  
  const resetAndClose = () => {
    setType(null); 
    setOrigin(null); 
    setOriginOptions(null); 
    setShow(false)
  }

  // Métodos del componente funcional
  const handleImport = () => {
    if (origin) {
      props.onSpinnerLoading(true);
      props.onClickHandler(<TileLayer key={origin.technicalAspects.url} attribution={origin.technicalAspects.attribution} url={origin.technicalAspects.url} />);
      resetAndClose();
    }
  };
  const handleClose = () => resetAndClose()
  const handleShow = () => setShow(true);

  // Con la carga del modal, cargamos los tipos de recursos
  const typeOptions = ExternalResources.types;


  const selectType = (selectedOption) => {
    setType(selectedOption.value);
    setOriginOptions(ExternalResources.origins.filter(orig => {return orig.type === selectedOption.value}));
  }

  const selectOrigin = (selectedOption) => {
    setOrigin(originOptions.find(orig => {return orig.value === selectedOption.value}));
  }


  return (
    <>
      <Button variant="primary" className="w-100" onClick={handleShow}>
        Añadir servicio externo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir un nuevo servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="selectors">
            Tipo de recurso
            <Select options={typeOptions} onChange={selectType} isDisabled={type} placeholder="Seleccione"/>
          </div>
          <div>
            Origen de datos
            <Select options={originOptions} onChange={selectOrigin} isDisabled={!type} placeholder="Seleccione"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleImport}>
            Importar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExternalResourceModal;