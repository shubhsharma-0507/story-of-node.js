const { validateToken } = require("../service/Auth");

function checkForAuthenticationCookie(cookieName) {//har req res per ye middleware chal raha hai //app.use(checkForAuthenticationCookie(cookieName));
    return (req, res, next) => {
        const tokencookieValue = req.cookies[cookieName]//cookie parse ki hai jo user se hume mili hai
        if (!tokencookieValue) {//user se hume token mila yaa nhi mila vo check ho raha hai 
           return next();
        }
        
        try {// why try ->>> jwt se hume token find nahi hua to error return kiya userpayload main 
            const UserPayload = validateToken(tokencookieValue)//yahan hume validatetoken se payload return hua hai// jwt main token verify kiya hai yaan nhi 
            req.user = UserPayload;//
        
        } catch (error){}
                 
       return next();
    };
}
module.exports={
    checkForAuthenticationCookie,
};