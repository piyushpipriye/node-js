// event for how many times api called 

const express = require('express');
const EventEmitter = require('events')
const app = express();

const event = new EventEmitter();       // creating event object

let count = 0
event.on("countApi", () => {        // event handling
    count++;
    console.log("event called", count)
})


app.get('/', (req, resp) => {
    resp.send("Called")
    event.emit("countApi")          // event calling
});

app.get('/search', (req, resp) => {
    resp.send("search Called")
    event.emit("countApi")
});

app.get('/update', (req, resp) => {
    resp.send("update Called")
    event.emit("countApi")
});

app.listen(5000)