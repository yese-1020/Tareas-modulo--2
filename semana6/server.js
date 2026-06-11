const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: "yesenia",
    mensaje: "hola comunidad"
  });

});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.get('/', (req, res) => {
  res.send('Servidor ejecutándose. Usa POST en /registro o /incidencia.');
});

app.get('/registro', (req, res) => {
  res.send('Esta ruta solo acepta POST. Envía los datos con POST a /registro.');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});