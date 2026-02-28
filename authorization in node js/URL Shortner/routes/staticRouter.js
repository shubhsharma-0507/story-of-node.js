const express=require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

const router=express.Router();

router.get("/admin/urls",restrictTo(["ADMIN"]),async(req,res)=>{
    // if(!req.user) return res.redirect("/login");

    const allUrls=await URL.find({});
return res.render("home",{urls:allUrls})
});

router.get("/",restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
    
    // if(!req.user) return res.redirect("/login");

    const allUrls=await URL.find({CREATEBY: req.user.id});
    // console.log(allUrls);
    
return res.render("home",{urls:allUrls})
});

router.get("/signup",(req,res)=>{
    return res.render("signup");
});

router.get("/login",(req,res)=>{
    return res.render("login");
});
module.exports=router;