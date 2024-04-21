const mongoose = require('mongoose') ;
const DB_NAME = "basicfullstack"

const connectDb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB HOST : ${connectionInstance.connection.host}`) ;
    } catch (error) {
        console.log("Error :: ERROR IN DATABASE CONNECTION" , error)
    }
}

module.exports = connectDb ;