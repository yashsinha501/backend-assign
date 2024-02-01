const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variants: [],
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
