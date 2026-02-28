const JWT=require('jsonwebtoken');
const secretkey ="$uperM@n123";

function createTokenForUser(user) {
    // payload is just a carrying data 
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    }
    const token=JWT.sign(payload,secretkey);
    return token;
}
function validateToken(token) {
    const payload=JWT.verify(token,secretkey);//chech user in jwt by token
return payload;
}
module.exports={
    createTokenForUser,
    validateToken, 
}
