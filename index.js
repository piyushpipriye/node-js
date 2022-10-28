const express = require('express');
const app = express();
const con = require('./config')

app.use(express.json())

app.get('/', (req, resp) => {
    con.query("select * from users", (err, result) => {
        if (err) {
            resp.send("Error")
        }
        else {
            resp.send(result)
        }
    })
})


app.post('/', (req, resp) => {
    const data = req.body       // dynamic data inserting through postman
    //console.log(data)
    //const data = { username: "piyush", password: "piyush@12", user_type: "user" }     // static data inserting
    con.query("INSERT INTO users SET ?", data, (err, result, fields) => {
        if (err) {
            resp.send("Error")
        }
        else {
            resp.send(result)
        }
    })
})


app.put('/:id', (req, resp) => {
    // const data = ["piyush", "piyush@123", "admin", 2]       // static data data updating
    const data = [req.body.username, req.body.password, req.body.user_type, req.params.id]     // dynamic data updating throgh postman
    //console.log(data)
    con.query("UPDATE users SET username=?,password=?,user_type=? where id=?", data, (err, result, fields) => {
        if (err) {
            resp.send("Error")
        }
        else {
            resp.send(result)
        }
    })
})

app.delete('/:id', (req, resp) => {
    //const data = 2       // static data data updating
    const data = req.params.id       // dynamic data updating throgh postman
    //console.log(data)
    con.query("DELETE from users where id=" + data, (err, result) => {
        if (err) {
            resp.send("Error")
        }
        else {
            resp.send(result)
        }
    })
})

app.listen(5000)