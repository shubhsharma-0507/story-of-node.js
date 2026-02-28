const express=require("express")
const User=require("../model/user");
const router=express.Router();


router.get("/signin",(req,res)=>{
    return res.render("signin");
});

router.get("/signup",(req,res)=>{
    return res.render("signup");

});
router.get("/logout",(req,res)=>{
   return res.clearCookie("token").redirect("/")

})
router.post("/signin",async (req,res)=>{
     const{email,password}=req.body;
  

// console.log("token",token);

try { const token=await User.MatchPasswordAndGenerateToken(email,password);//yahan se do kaam ho rahe hai password validation and token bhi generate kiya hain
    return res.cookie('token',token).redirect("/")
} catch (error) {
    return res.render("signin",{
        error:"incorrect email or password",
    });
}

});
router.post("/signup",async(req,res)=>{
    const{fullName,email,password}=req.body;
    console.log(fullName+" "+email+" "+password);
    
    await User.create({
        fullName,
        email,
        password,
    })
    return res.redirect("/");
})

module.exports=router;