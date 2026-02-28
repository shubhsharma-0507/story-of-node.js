const { getUser } = require("../service/auth")
function checkForAuthentication(req,res,next){
    req.user=null;
   const tokencookie = req.cookies?.token;

   if(!tokencookie){
    return next();
   }
   const token=tokencookie;
   const user=getUser(token);
   req.user=user;
   console.log(user);
   
   return next();
}

function restrictTo(roles=[]){
    return function (req,res,next)
    {
        // console.log(req.user.role);
        
        if(!req.user) return res.redirect("/login")
            if(!roles.includes(req.user.role)) return res.end("UnAuthorized");
                return next(); 
    }
}


// async function resteictToLoggedinUserOnly(req, res, next) {
//     console.log(req.headers);
    
//     const userUid = req.headers["authorization"];
//     if (!userUid) {
//         return res.redirect("/login");
//     }
//     const token=userUid.split("Bearer ")[1];//"Bearer [23dhfbbffurbf]"
//     const user = getUser(token);
//     console.log(user)
//     if (!user) {
//         return res.redirect("/login")
//     } 
//     req.user = user;
// //  console.log(user);
//     next();
// }
// async function checkAuth(req,res,next) {
//     const userUid = req.headers["authorization"];
// //    if(!userUid){
// //         req.user = null;
// //         return next();
// //     }
//    console.log(req.headers);
//     const token=userUid.split("Bearer ")[1];//remove un-necesory bearer string 
//     const user = getUser(token);
//     req.user = user;
//     next();
// }


module.exports={
checkForAuthentication,restrictTo
}