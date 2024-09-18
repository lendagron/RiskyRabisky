// Armazena as imagens e seus votos
var images = [
  { id: 1, votes: 0, order: 0 },
  { id: 2, votes: 0, order: 1 },
  { id: 3, votes: 0, order: 2 },
  { id: 4, votes: 0, order: 3 },
  { id: 5, votes: 0, order: 4 }
];

// Função para salvar a ordem das imagens no armazenamento local
function saveImageOrder() {
  localStorage.setItem('imageOrder', JSON.stringify(images));
}

// Função para carregar a ordem das imagens do armazenamento local
function loadImageOrder() {
  var storedImages = localStorage.getItem('imageOrder');
  if (storedImages) {
    images = JSON.parse(storedImages);
  }
}

// Função para atualizar a lista de imagens
function updateImageList() {
  var imageList = document.getElementById('image-list');
  imageList.innerHTML = '';
  images.forEach(function(image, index) {
    var imageElement = document.createElement('img');
    imageElement.src = 'Smolder_' + image.id + '.jpg';
    imageElement.alt = 'Imagem ' + image.id;
    var button = document.createElement('button');
    button.textContent = 'Votar';
    button.onclick = function() {
      vote(image.id);
    };
    var listItem = document.createElement('li');
    listItem.style.order = image.order; // Defina a ordem do item com base na propriedade order
    listItem.appendChild(imageElement);
    listItem.appendChild(button);
    imageList.appendChild(listItem);
  });
}

// Função para votar em uma imagem
function vote(imageId) {
  // Verifica se o usuário já votou nessa imagem
  var image = images.find(function(image) {
    return image.id === imageId;
  });
  if (image.votes === 0) {
    image.votes++;
    // Reordena as imagens com base nos votos
    images.sort(function(a, b) {
      return b.votes - a.votes;
    });
    // Atualiza a ordem das imagens
    images.forEach(function(image, index) {
      image.order = index;
    });
    saveImageOrder(); // Salva a ordem das imagens no armazenamento local
    updateImageList();
  } else {
    console.log('Você já votou nessa imagem!');
  }
}

// Carrega a ordem das imagens do armazenamento local
loadImageOrder();

// Inicializa a lista de imagens
updateImageList();