let mongoose = require("mongoose");
let dotenv = require("dotenv")


dotenv.config()

let connectdb = (req,res)=>{

    mongoose.connect(process.env.MONGODBASE)
    .then(()=>{
        console.log("Database is connected to server");
        
    })
    .catch((e)=>{
        console.log("Error in connection",e);
        
    })
}

module.exports = connectdb