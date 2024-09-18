const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');

app.use(bodyParser.json());

// Endpoint para salvar a ordem das imagens
app.post('/save-image-order', function(req, res) {
  var images = req.body;
  db.saveImageOrder(images);
  res.send('Ordem das imagens salva com sucesso!');
});

// Endpoint para recuperar a ordem das imagens
app.get('/get-image-order', function(req, res) {
  var images = db.getImageOrder();
  res.json(images);
});

app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});