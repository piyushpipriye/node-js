const dbConnection = require('./mongodb')

const updateData = async () => {
    let data = await dbConnection()
    let  res =  await data.updateOne(    // updateOne() will updat only one record at a time to update multiple at a same time use update()
        { name: 'm 111' },       // for condition 
        {
            $set: {name: 'm 1'}       // $set keyword for setting values followed by : values to be update
        }
    )
    if(res.acknowledged){
        console.log(res.modifiedCount,"records updated successfully")
    }
   // console.log(res)
}

updateData()