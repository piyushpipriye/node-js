// const app = require('./app')
// console.log("sub")
// var a = 10
// var b= 20
// console.log(a,b)
// a= "123"
// b= 123
// if(a===b){
//     console.log("got it")
// }

// console.log(app.x+app.y)
// console.log(app.z())


// arr=[1,2,3,4,5,6]
// let ar = arr.filter((items)=>{
// return items>1                                                   // fs is for file system to manage file related operations 
// })
// console.log(ar)
// const fs = require('fs');
//  fs.writeFileSync("demo.txt","hellllllllo alll creating a file")


// const http = require('http')
// http.createServer((req, res) => {                                    // create a basic server
//     res.write("<h1>hello, this is piyush pipriye")
//     res.end()
// }).listen(4500)


//var colors = require('colors');
//console.log("hello".green,"all".red)        // assign color to text

//console.log("aeeeeeeeeeee lavde 80 hazar ke shoes hai tera ghr jayega isme smja kta tera ghr isme chla jayega")

// const data = require('./api_data')
// const http = require('http')
// http.createServer((req, res) => {                                    // create a basic server
//     res.writeHead(450,{'Content-Type':'application\json'})          // defining status code where 450  is staus code
//     res.write(JSON.stringify(data))                                 // printing static data from another file by api 
//     res.end()
// }).listen(400)

// console.log(process.argv[2])   // argv stands for argument vector which will help to acces the i/p given by the user[index_no]
// 0 & 1 are reserved index nos afters words it start like node .\index.js any_input_provide_here



// const fs= require('fs')             // import file module/package 
// const input = process.argv          // accessing or taking input from user in the form of array
// if(input[2]=='add'){
// fs.writeFileSync(input[3],input[4])        //giving file name and its content [2] will provide file name & [3] will file content
// console.log("File added successfully")
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
//     console.log("File deleted successfully")           // this will delete the file for that we used fs.unlinksync function
// }
// else{
//     console.log("invalid choice")
// }\

// const fs = require('fs')
// const path = require('path');       // importing path module/package 
// const dirpath =  path.join(__dirname,'\files')
// fs.readdir(__dirname,(err, files) =>{           // __dirname returns the current directory of working
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });

// CRUD Operation in fie system
// const fs = require('fs')                        
// const path = require('path')
// const dirpath = path.join(__dirname,'crud')
// const filePath = `${dirpath}/data.txt`
// fs.writeFileSync(filePath,"Simple text")        // creates a new file 

// fs.readFile(filePath,'utf8',(err,items)=>{      // reads an existing file
//     console.log(items)
// })

// fs.appendFile(filePath,'for demo',(err)=>{      // update the file content
//     if(!err) console.log("file updated")
// })

// fs.rename(filePath,`${dirpath}/data1.txt`,(err) => {     //  rename the file name
//     if(!err) console.log("file name is updated") 
// })

// fs.unlinkSync(`${dirpath}/data1.txt`)       // removes the file from directory

// console.log("start exe")

// setTimeout(()=>{
//     console.log("logic exe")            // it will print start exe then complete then logic exe
// },2000)                                 // 2 sec gaps not wait to complete goto next stmnt

// console.log("complete exe")

// let a = 10
// let b = 0
// setTimeout(()=>{
//     b=20            // this is one of the drawback of asynchronous pro lang 
// },2000)             // as it will print 10 as sum which is not acceptable 
// console.log(a+b)

// let a = 10
// let b = 0            
// let waitingdata = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(20)         // we can pass array, object to resolve // Promise handles the asynchronous task              
//     },2000)                 // used for providing the correct output
// })
// waitingdata.then((b)=>{     // then will execute after the certain gap 
//     console.log(a+b) 
// })

// console.log("Starting up")      // 1st this will print

// setTimeout(()=>{
//     console.log("2 sec gap")          // at last this will print
// },2000) 

// setTimeout(()=>{
//     console.log("0 sec gap")          // 3rd this will print
// },0) 

// console.log("finishing up")             // 2nd this will print

// const express = require('express');
// const app = express();

// app.get('/data', (req, res) => {
//     // simple page by using get which is from express js //in addition gets are called route
//     res.send(`
//     <center>
//     <h1>Welcomet to Data Page</h1><br>
//     <a href="/" >Back to home page</a><br>
//     <a href="/about">Go to about page </a>
//     </center>
//     `)
//     //res.send(req.query)
//     console.log("data sent by user ", req.query)
// })


// app.get('/', (req, res) => {
//     res.send(`
//     <center>
//     <h1>Welcome to Home Page</h1>
//     <a href="/about"target="_blank">Go to about page </a><br>
//     <a href="/data"target="_blank">Go to data page </a>
//     </center>
//     `)                                                          // rendering html tags
    
//     //     res.send(`
//       // <form>
//     //   <label for="username">Username:</label><br>
//     //   <input type="text"placeholder="Enter Username"><br>            // this also rendering html tags
//     //   <label for="pwd">Password:</label><br>
//     //   <input type="password" placeholder="Enter Password"><br>
//     //   <input type="submit" value="Submit">
//     //   <input type="reset" value="Reset">
//     // </form>
//     //     `)
// })

// app.get('/about', (req, res) => {
//     res.send(`
//     <center>
//     <h1>Welcomet to About Page</h1><br>
//     <a href="/" >Back to home page</a><br>
//     <a href="/data">Go to data page </a>
//     </center>
//     `)
// })

// app.listen(5000)


// const { json } = require('express')
// const express = require('express')
// const path = require('path')

// const app = express()  
// const pubpath = path.join(__dirname,'public')
//console.log(pubpath)
// app.use(express.static(pubpath))     // use method does not provide route functionality 

// app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.sendFile(`${pubpath}/index.html`)
// })
// app.get('/profile',(req,res)=>{
//     const user ={
//         name:'piyush pipriye',
//         email:'pipriyepiyush00@gmail.com',
//         city:'aurangabad',
//         skills:['php','node js', 'javascript' ]
//     }
//     res.render('profile',{user})
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(`${pubpath}/about.html`)
// })

// app.get('/login',(req,res)=>{
//     res.render('login')
// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${pubpath}/pagenotfound.html`)
// })

// app.listen(5000) 

// const express = require('express')
// const app = express()
// const reqFilter = require('./middleware')
// const route = express.Router();

// route.use(reqFilter);
// // app.use(reqFilter)                           // used for application level route

// app.get('/',(req,res)=>{
//     res.send("Welcome to home page")
// })

// app.get('/users',reqFilter, (req,res)=>{    //applies middleware to specific that route only    // apply middleware to single route
//     res.send("Welcome to users page")
// })

// route.get('/about',(req,res)=>{                 //group level route to apply middleware
//     res.send("Welcome to about page")
// })

// route.get('/contact',(req,res)=>{
//     res.send("Welcome to contact page")         //group level route to apply middleware
// })

// app.use('/',route);

// app.listen(5000)

