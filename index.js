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

