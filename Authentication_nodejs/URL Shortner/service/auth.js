const sessionIdToUserMap=new Map();//after restart server then all data from hash map will removed

function setUser(id,user) {
    sessionIdToUserMap.set(id,user);

}
function getUser(id) {
   return sessionIdToUserMap.get(id);
}
module.exports={
    setUser,getUser,
}