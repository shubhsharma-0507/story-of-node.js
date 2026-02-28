// ******* ye humari state thi statefull authentication ki*****
// const sessionIdToUserMap=new Map();//after restart server then all data from hash map will removed

// function setUser(id,user) {
//     sessionIdToUserMap.set(id,user);

// }
// function getUser(id) {
//    return sessionIdToUserMap.get(id);
// }
// module.exports={
//     setUser,getUser,
// }
const jwt = require("jsonwebtoken");
const secretKEY="shubh$labh$7860"
// const sessionIdToUserMap = new Map();//after restart server then all data from hash map will removed

function setUser( user) {
    console.log(user);
    
    return jwt.sign({
        email:user.email,
        password:user.password,
        role: user.role,
        id:user._id,
    },secretKEY);

}
function getUser(token) {
    if(!token) return null;
    try{return jwt.verify(token,secretKEY)}
    catch (error){
        return null;
    }
    
}
module.exports = {
    setUser,
    getUser,
}