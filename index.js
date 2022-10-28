const express = require('express')
const path = require('path')

const app = express()
const pubpath = path.join(__dirname, 'public')
console.log(pubpath)
app.use(express.static(pubpath))     // use method does not provide route functionality 

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(`${pubpath}/index.html`)
})
app.get('/profile', (req, res) => {
    const user = {
        name: 'piyush pipriye',
        email: 'pipriyepiyush00@gmail.com',
        city: 'aurangabad',
        skills: ['php', 'node js', 'javascript']
    }
    res.render('profile', { user })
})

app.get('/about', (req, res) => {
    res.sendFile(`${pubpath}/about.html`)
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('*', (req, res) => {
    res.sendFile(`${pubpath}/pagenotfound.html`)
})

app.listen(5000)