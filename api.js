const express = require('express')
const app = express()
const dbConnectoin = require('./mongodb')
const fetch = require('./readData')
const insert = require('./insertData')
const update = require('./updateData')
const deleteData = require('./deleteData')

app.use(express.json());


app.get('/', async (req, resp) => {
    data = await fetch()
    // let data  = await dbConnectoin()        // 2nd way of handline the promises
    //  data = await data.find().toArray();     // can fetch specific data also by giving arguments in find() method 
    // console.log(data)
    resp.send(data)
})


app.post('/', async (req, resp) => {
    data = await insert(req.body)
    // console.log(req.body)
    // let data = await dbConnectoin()
    // let result = await data.insert(req.body)        // inserting data through postman
    resp.send(data)
})


app.put('/', async (req, resp) => {
    res = await update(req.body[0],req.body[1])
    console.log(res)                                    // updating data through postman
    resp.send(res)
})

app.delete('/', async (req, resp) => {
    res = await deleteData(req.body)                    // deleting data through postman
    console.log(res)
    resp.send(res)
})


app.listen(5000)