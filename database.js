const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images', { useNewUrlParser: true, useUnifiedTopology: true });

const imageSchema = new mongoose.Schema({
  id: Number,
  votes: Number,
  order: Number
});

const Image = mongoose.model('Image', imageSchema);

module.exports = {
  saveImageOrder: function(images) {
    Image.insertMany(images, function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log('Ordem das imagens salva com sucesso!');
      }
    });
  },
  getImageOrder: function() {
    return Image.find().sort({ order: 1 });
  }
};