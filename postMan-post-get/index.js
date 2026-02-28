const express=require('express');
const users=require('./MOCK_DATA.json');
console.log(users)
const app = express();
const PORT=8000;
const fs=require("fs");
const { number } = require('framer-motion');
//MIDDLEWARE********-plugin
app.use(express.urlencoded({extended:false}));
app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app.route("/api/users").get((req,res)=>{
const id=Number(req.params.id);
const user=users.find((user)=>{
  return user.id===id
});
 return res.json(user); 

}).post((req,res)=>{
//edit user with id
const body=req.body;
// console.log({body})
users.push({id: users.length + 1,...body});
fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    return res.json({status:"pending"});
})
}).patch((req,res)=>{
//edit user with id
return res.json({status:"pending"});
}).delete((req,res)=>{
 
});
app.listen(PORT,
  ()=>console.log(`server started at path ${PORT}`));