let express =require( "express");
let protectRoute =require( "../middlewares/protectRoute");
let getUsersForSidebar =require( "../controllers/user.controllers.js");

const routers = express.Router();

routers.get("/getAll", protectRoute, getUsersForSidebar);

module.exports= routers;
