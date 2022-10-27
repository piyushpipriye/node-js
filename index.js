// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/e-commerce")

// const productSchema = new mongoose.Schema({     // Defining schemas
//     name: String,
//     brand: String,
//     price: Number,
//     category: String
// });

// const productModel = mongoose.model('products', productSchema);     // Defining model

// const insert = async () => {
//     let data = new productModel({ name: "6 s", brand: "iphone", price: 25000, category: "mobile" })      // can add only those fields which are defined by schemas only
//     let result = await data.save();
//     console.log(result)
// }
// //insert()

// const update = async () => {
//     let result = await productModel.updateOne(
//         { name: "6 s" },
//         {
//             $set: { price: 20000, name: "7 s" }
//         }
//     )
//     console.log(result)
// }
// //update()

// const dele = async () => {
//     let result = await productModel.deleteOne(
//         { name: "7 s" }
//     )
//     console.log(result)
// }
// //dele()

// const fetch = async () => {
//     let result = await productModel.find()
//     console.log(result)
// }
// // fetch()


const express = require('express');
require('./config')
const products = require('./product')

const app = express();
app.use(express.json())

app.post('/create', async (req, resp) => {
    let data = new products(req.body)
    let result = await data.save()
    resp.send(result);
})

app.get('/get', async (req, resp) => {
    let data = await products.find()
    resp.send(data)
})

app.delete('/delete', async (req, resp) => {
    let res = await products.deleteOne(
        req.body
    )
    resp.send(res)
})

app.put('/update', async (req, resp) => {
    let result = await products.update(
        { name: req.body.name },
        {
            $set: req.body
        }
    )
    resp.send(result)
})

app.listen(5000);
