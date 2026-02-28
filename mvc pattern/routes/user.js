const express=require('express');
// const User=require('./models/user')
const router=express.Router();
const {HandlegetallUser}=require('../controller/user');
const {HandleCreateUser}=require('../controller/user');
const {HandleGetuserbyId}=require('../controller/user');
const {HandleUpdateuserbyId}=require('../controller/user');
const {HandleDeleteuserbyId}=require('../controller/user');
//put data or create DATA ON MONGO DB
// get all user from mongo db
router.route("/").get(HandlegetallUser).post(HandleCreateUser);

//get particular user by id from mongo db
router
    .route("/:id")
    .get(HandleGetuserbyId)
    .patch(HandleUpdateuserbyId)
    .delete(HandleDeleteuserbyId)


module.exports=router;
    
