

let express=require('express');

const authControllers = require('../controllers/auth.controllers');
const routes = express.Router();

routes.post('/signup',authControllers.signup)
routes.post('/login',authControllers.login)
routes.post('/logout',authControllers.logout)


module.exports=routes








//using es6

// import express from "express";
// import { home } from "../controllers/auth.controllers";

// const router = express.Router();

// router.get("/", home);

// export {router};