console.log("start exe")

setTimeout(() => {
    console.log("logic exe")            // it will print start exe then complete then logic exe
}, 2000)                                 // 2 sec gaps not wait to complete goto next stmnt

console.log("complete exe")

let x = 10
let y = 0
setTimeout(() => {
    y = 20            // this is one of the drawback of asynchronous pro lang 
}, 2000)             // as it will print 10 as sum which is not acceptable 
console.log(x + y)

let a = 10
let b = 0
let waitingdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)         // we can pass array, object to resolve // Promise handles the asynchronous task              
    }, 2000)                 // used for providing the correct output
})
waitingdata.then((b) => {     // then will execute after the certain gap 
    console.log(a + b)
})

console.log("Starting up")      // 1st this will print

setTimeout(() => {
    console.log("2 sec gap")          // at last this will print
}, 2000)

setTimeout(() => {
    console.log("0 sec gap")          // 3rd this will print
}, 0)

console.log("finishing up")             // 2nd this will print
