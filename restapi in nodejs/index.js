const express=require('express');
const users=require('./MOCK_DATA.json');
// console.log(users)
const app = express();
const PORT=8000;

app.get("/api/users",(req,res)=>{
    return res.json(users);
})
app.get("/users",(req,res)=>{
   
       const HTML= `
       <ul>
       ${users.map((user)=>`<li>${user.first_name}</li>`)
       .join("")}
        </ul>`;
      res.send(HTML);
})
//it is static way to find user

// app.get("/api/users/1",(req,res)=>{
//     return res.json(users.id);
// })

//Dynamic way to find user by id

// app.get("/api/users/:id",(req,res)=>{
// const id=Number(req.params.id);
// const user=users.find((user)=>{
//   return user.id===id
// });
//  return res.json(user); 

// })

//common route for get,post,patch,delete request
app.route("/api/users/:id").get((req,res)=>{
const id=Number(req.params.id);
const user=users.find((user)=>{
  return user.id===id
});
 return res.json(user); 

}).patch(()=>{
//edit user with id
return res.json({status:"pending"});
}).delete(()=>{
return res.json({status :"pending"});
});


app.listen(PORT,
  ()=>console.log(`server started at path ${PORT}`));