const mongoose= require("mongoose")
let dotenv=require('dotenv')

dotenv.config();
let url=process.env.DATABASE
// console.log(url)
const connectToDB=async(req,res)=>{
    try {
         await  mongoose.connect(url);
         console.log("database connected successfully")
    } catch (error) {
          console.log("database not connected",error)
    }
}

module.exports=connectToDB