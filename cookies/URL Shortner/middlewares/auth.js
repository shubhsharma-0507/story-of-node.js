const { getUser } = require("../service/auth")
async function resteictToLoggedinUserOnly(req, res, next) {
    console.log(req.headers);
    
    const userUid = req.headers["authorization"];
    if (!userUid) {
        return res.redirect("/login");
    }
    const token=userUid.split("Bearer ")[1];//"Bearer [23dhfbbffurbf]"
    const user = getUser(token);
    console.log(user)
    if (!user) {
        return res.redirect("/login")
    } 
    req.user = user;
//  console.log(user);
    next();
}
async function checkAuth(req,res,next) {
    const userUid = req.headers["authorization"];
//    if(!userUid){
//         req.user = null;
//         return next();
//     }
   console.log(req.headers);
    const token=userUid.split("Bearer ")[1];//remove un-necesory bearer string 
    const user = getUser(token);
    req.user = user;
    next();
}


module.exports={
resteictToLoggedinUserOnly,checkAuth
}