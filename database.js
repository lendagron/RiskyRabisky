const fs = require("fs");

let images = [];

// Carrega os votos do arquivo
fs.readFile("votes.json", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    images = JSON.parse(data);
  }
});

// Salva os votos no arquivo
function saveImageOrder(images) {
  fs.writeFile("votes.json", JSON.stringify(images), (err) => {
    //TODO
    if (err) {
      console.error(err);
    } else {
      console.log("Votos salvos com sucesso!");
    }
  });
}

// Recupera os votos do arquivo
function getImageOrder() {
  return images;
}

module.exports = { saveImageOrder, getImageOrder };
