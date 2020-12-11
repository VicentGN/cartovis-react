var externalResources = {
  types: [
    { value: 'wms/wmts', label: 'WMS/WMTS' }
  ],

  origins : [
    {
      type: 'wms/wmts',
      value: 'pnoa',
      label: 'Plan Nacional de Ortofotografía Aérea (PNOA)',
      technicalAspects: {
        url: 'https://www.ign.es/wmts/pnoa-ma?service=WMTS&layer=OI.OrthoimageCoverage&version=1.0.0&style=default&tilematrixset=GoogleMapsCompatible&request=GetTile&format=image/png&tilematrix={z}&tilecol={x}&tilerow={y}',
        attribution: 'Teselas de PNOA cedido por © Instituto Geográfico Nacional de España'
      }
    }, 
    {
      type: 'wms/wmts',
      value: 'orto_icv',
      label: 'Ortofoto 2020 Comunitat Valenciana',
      technicalAspects: {
        url: "https://terramapas.icv.gva.es/odcv05_etrs89h30_2020_3857/wmts?service=wmts&version=1.0.0&layer=01_8bits_01_RGB_05_PNG&style=default&tilematrixset=GMEPSG3857&request=GetTile&format=image/png&tilematrix={z}&tilecol={x}&tilerow={y}",
        attribution: 'ORTOFOTO 2020 BY 4.0 © Institut Cartogràfic Valencià, Generalitat'
      }
    }
  ],
}

export default externalResources;

