const express=require("express")
const User=require("../model/user");
const router=express.Router();

router.get("/add-blog",(req,res)=>{
    return res.render("addblog",{
        user:req.user,
    });

});

module.exports=router;