const dbConnectoin = require('./mongodb')

// dbConnectoin().then((res)=>{
//     res.find().toArray().then((data)=>{     // way of handling promises
//         console.log(data)
//     })
// })


const main = async ()=>{
    let data  = await dbConnectoin()        // 2nd way of handline the promises
    data = await data.find().toArray();     // can fetch specific data also by giving arguments in find() method 
    console.log(data)
}
main()
