const dbConnection = require('./mongodb')

const deleteData = async () => {
    let data = await dbConnection()
    let  res =  await data.deleteOne(    // deleteOne() will updat only one record at a time to update multiple at a same time use deleteMany()
        { name: 'm 20' },       // for condition 
       
    )
    if(res.acknowledged){
        console.log(res.deletedCount,"records deleted successfully")
    }
   //console.log(res)
}

deleteData()