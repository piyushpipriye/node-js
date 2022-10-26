// file for defining model and schemas
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({     // Defining schemas 
    name: String,
    brand: String,
    price: Number,
    category: String
});

module.exports = mongoose.model('products', productSchema)