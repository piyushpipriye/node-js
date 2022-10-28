const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

// con.connect((err) => {
//     if (err) {                            // checking database is connected or not
//         console.warn("error")
//     }
//     else {                                       
//         console.warn("connected")
//     }
// })

con.query('select * from users', (err, result) => {
    if (err) {
        console.warn(err)
    }
    else {
        console.warn(result)
    }
})