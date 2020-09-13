const mongoose = require('mongoose');

const product = new mongoose.Schema({
  productName: {
    type: String
  },
  costPrice: {
    type: Number
  },
  sellingPrice: {
    type: Number
  },
  quantity: {
    type: Number
  },
});

module.exports = Product = mongoose.model('product', product);
