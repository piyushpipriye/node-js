const express = require('express')
const app = express()
const reqFilter = require('./middleware')
const route = express.Router();

route.use(reqFilter);
// app.use(reqFilter)                           // used for application level route

app.get('/', (req, res) => {
    res.send("Welcome to home page")
})

app.get('/users', reqFilter, (req, res) => {    //applies middleware to specific that route only    // apply middleware to single route
    res.send("Welcome to users page")
})

route.get('/about', (req, res) => {                 //group level route to apply middleware
    res.send("Welcome to about page")
})

route.get('/contact', (req, res) => {
    res.send("Welcome to contact page")         //group level route to apply middleware
})

app.use('/', route);

app.listen(5000)