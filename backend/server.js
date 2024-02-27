

let express=require('express')
let cookie=require('cookie-parser')
let authRoutes=require('./routers/auth.routers')
let messageRoutes=require('./routers/message.router')
let userRoutes=require('./routers/user.routes')
let dotenv=require('dotenv')
let connectToDB=require('./db/connectdb')

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 


app.use(express.json())

app.use(cookie())

app.use('/api', authRoutes);
app.use('/api',messageRoutes)
app.use("/api/users",userRoutes)

app.listen(port, () => {
	connectToDB()
    console.log(`Server running on port ${port}`);
});











//using es6


// import express from "express";
// import dotenv from "dotenv";


// import {router} from "./routers/auth.routers";



// let app=express()


// const PORT = process.env.PORT || 5000;



// dotenv.config();


// app.use("/api/auth", router);


// server.listen(PORT, () => {
// 	console.log(`Server Running on port ${PORT}`);
// });

