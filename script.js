// Armazena as imagens e seus votos
var images = [
  { id: 1, votes: 0 },
  { id: 2, votes: 0 },
  { id: 3, votes: 0 },
  { id: 4, votes: 0 },
  { id: 5, votes: 0 }
];

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
    listItem.style.order = index; // Defina a ordem do item
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
    updateImageList();
  } else {
    console.log('Você já votou nessa imagem!');
  }
}

// Inicializa a lista de imagens
updateImageList();