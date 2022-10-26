const express = require('express')
const app = express()
const dbConnectoin = require('./mongodb')
const fetch = require('./readData')
const insert = require('./insertData')
const update = require('./updateData')
const deleteData = require('./deleteData')

app.use(express.json());


app.get('/', async (req, res) => {
    data = await fetch()
    // let data  = await dbConnectoin()        // 2nd way of handline the promises
    //  data = await data.find().toArray();     // can fetch specific data also by giving arguments in find() method 
    // console.log(data)
    res.send(data)
})


app.post('/', async (req, resp) => {
    data = await insert(req.body)
    // console.log(req.body)
    // let data = await dbConnectoin()
    // let result = await data.insert(req.body)        // inserting data through postman
    resp.send(data)
})


app.post('/', async (req, resp) => {
    data = await update(req.body[0],req.body[1])
    // console.log(req.body)
    // let data = await dbConnectoin()
    // let result = await data.insert(req.body)        // inserting data through postman
    resp.send(data)
})


app.listen(5000)