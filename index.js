const data = require('./api_data')
const http = require('http')
http.createServer((req, res) => {                                    // create a basic server
    res.writeHead(450, { 'Content-Type': 'application\json' })          // defining status code where 450  is staus code
    res.write(JSON.stringify(data))                                 // printing static data from another file by api 
    res.end()
}).listen(400)