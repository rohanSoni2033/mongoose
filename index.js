const mongoose = require('mongoose');

// connection local mongodb
// connection_uri + database_name
const URI = 'mongodb://localhost:27017/foodbite';
mongoose
  .connect(URI, (err) => {
    if (err) {
      return new Error('Error ⛔');
    }
  })
  .then((res) => {
    console.log(res);
  });

// creating a Schema defining the structure of the document
const productsSchema = mongoose.Schema({
  name: { type: String, max: 40, require: true, unique: true },
  price: { type: Number, max: 2999, require: true },
  category: { type: String, require: true },
  imageLink: { type: String, require: true, unique: true },
});

// creating a model using Schema
const productsModel = mongoose.model('products', productsSchema);

// creating a document instance of Model
const pizza = new productsModel({
  name: 'double chess panner pizza',
  price: 299,
  category: 'pizza',
  imageLink: 'pizza_image_11.jpg',
});

// saving the document into database
pizza.save(function (err) {
  if (err) {
    console.log(log);
  }
});
