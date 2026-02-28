const { handleUserSignup, handleUserLogin } = require("../controller/user");

const express=require("express");
const router=express.Router();



router.post('/',handleUserSignup)
router.post('/login',handleUserLogin)

module.exports=router;