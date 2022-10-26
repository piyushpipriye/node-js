const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-commerce")
const insert = async () => {
    const productSchema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        category: String
    });

    const productModel = new mongoose.model('products', productSchema);
    let data = new productModel({ name: "6 s", brand: "iphone", price: 25000, category: "mobile" })      // can add only those fields which are defined by schemas only
    let result = await data.save();
    console.log(result)
}

//insert()

const update = async () => {
    const productSchema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        category: String
    });

    const productModel = new mongoose.model('products', productSchema);
    let data = new productModel({ name: "6 s", brand: "iphone", price: 25000, category: "mobile" })      // can add only those fields which are defined by schemas only
    let result = await data.save();
    console.log(result)
}

//update()