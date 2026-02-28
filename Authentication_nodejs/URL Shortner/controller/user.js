const user=require("../models/User");

const { v4:uuidv4 } = require('uuid');
const {setUser} = require("../service/auth")

async function handleUserSignup(req,res) {
const {name,email,password}=req.body;
await user.create({
name,
email,
password
})
    return res.render("signup");
}

async function handleUserLogin(req,res) {
const {email,password}=req.body;
const loginUser=await user.findOne({
email,password
})
if(!loginUser)
{
    // console.log("Invalid Username or Password");
    return res.render("login",{
        error: 'Invalid Username or Password',
    });
}
const sessionId=uuidv4();
setUser(sessionId,loginUser);//hash map per data bhrj diya 
// console.log(sessionId);
// console.log(loginUser);
res.cookie("uid",sessionId);//coockies mai data bhej diya
return res.redirect("/");  
///******************WHY NEED OF REDIRECT because reuse the path redirected on the path*****************************************************///  
// ***************redirect -> path per bhej dena**********************************************************************************//
///***************render ->html,ejs ko screen per render kardo*********************************************** */
}
module.exports={
    handleUserSignup,handleUserLogin,
}