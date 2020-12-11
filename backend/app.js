// backend/app.js

var express = require('express');
var app = express();
const fs = require('fs');
var cors = require('cors')

app.use(cors())
let port = process.env.PORT; // Importante que el Puerto lo asigne el servidor de Heroku

app.get('/', function (req, res) {
  res.send('Welcome to the GIS Server!');
});

// La capa de Hospitales alojada en el directorio backend/public
app.get('/hospitales', (req, res) => {
  fs.readFile(__dirname  + '/public/hospitales.geojson', (err, data) => {
      if (err) throw err;
      let hospitales = JSON.parse(data);
      res.send(hospitales)
    });
})

// La capa de Guardia Civil alojada en el directorio backend/public
app.get('/guardiacivil', (req, res) => {
  fs.readFile(__dirname  + '/public/guardiacivil.geojson', (err, data) => {
      if (err) throw err;
      let guardiacivil = JSON.parse(data);
      res.send(guardiacivil)
    });
})

// Esto es para trabajar en local
if (port == null || port == "") {
  port = 8888;
}
app.listen(port);