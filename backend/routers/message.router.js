let express=require('express')

let router=express.Router()
let protectRoute=require('../middlewares/protectRoute')

let messageControllers=require('../controllers/message.controllers')

router.get('/:id',protectRoute,messageControllers.getMessages)
router.post('/send/:id',protectRoute,messageControllers.messageSends)


module.exports=router