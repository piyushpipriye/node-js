const dbConnection = require('./mongodb')

const insert = async () => {
    const db = await dbConnection()
    const result = await db.insert(
    [    
            {name: "m 10", brand: "samsung", price: 12000,category:"mobile"},
            {name: "m 11", brand: "samsung", price: 13000,category:"mobile"}  // by [] multiple records can be inserted else for single {}
        ]
    )
    if(result.acknowledged){
        console.log("Data inserted")
    }
}

insert()