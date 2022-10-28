const app = require('./app')
//console.log("sub")
var a = 10
var b = 20
console.log(a, b)
a = "123"
b = 123
if (a === b) {
    console.log("got it")
}

console.log(app.x + app.y)
console.log(app.z())


arr = [1, 2, 3, 4, 5, 6]
let ar = arr.filter((items) => {
    return items > 1
})
console.log(ar)


