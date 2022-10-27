const dbConnection = require('./mongodb')

const insert = async (data) => {
    const db = await dbConnection()
    // const result = await db.insert(
    // [    
    //         {name: "m 10", brand: "samsung", price: 12000,category:"mobile"},
    //         {name: "m 11", brand: "samsung", price: 13000,category:"mobile"}  // by [] multiple records can be inserted else for single {}
    //     ]
    // )
    const result = await db.insert(data)
    if(result.acknowledged){
        console.log("Data inserted")
    }
    // console.log(result)
    return result
    
}

insert()

module.exports= insert