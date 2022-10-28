const fsdemo = require('fs');
fsdemo.writeFileSync("demo.txt", "hellllllllo all creating a file")

const fs = require('fs')             // import file module/package
const input = process.argv          // accessing or taking input from user in the form of array
console.log(input[2])
if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4])        //giving file name and its content [2] will provide file name & [3] will file content
    console.log("File added successfully")
}
else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
    console.log("File deleted successfully")           // this will delete the file for that we used fs.unlinksync function
}
else {
    console.log("invalid choice")
}

const fs1 = require('fs')
const path = require('path');       // importing path module/package
const dirpath = path.join(__dirname, '\files')
fs1.readdir(__dirname, (err, files) => {           // __dirname returns the current directory of working
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});

//CRUD Operation in fie system
const fs2 = require('fs')
const path1 = require('path')
const dirpath1 = path1.join(__dirname, 'crud')
const filePath = `${dirpath1}/data.txt`
fs2.writeFileSync(filePath, "Simple text")        // creates a new file

fs2.readFile(filePath, 'utf8', (err, items) => {      // reads an existing file
    console.log(items)
})

fs2.appendFile(filePath, 'for demo111111', (err) => {      // update the file content
    if (!err) console.log("file updated")
})

fs2.rename(filePath, `${dirpath1}/data1.txt`, (err) => {     //  rename the file name
    if (!err) console.log("file name is updated")
})

fs2.unlinkSync(`${dirpath1}/data1.txt`)       // removes the file from directory
