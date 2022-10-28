
const http = require('http')
http.createServer((req, res) => {                                    // create a basic server
    res.write("<h1>hello, this is piyush pipriye")
    res.end()
}).listen(4500)
