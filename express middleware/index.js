const express=require('express');
const users=require('./MOCK_DATA.json');
console.log(users)
const app = express();
const PORT=8000;
const fs=require("fs");
const { number } = require('framer-motion');
//MIDDLEWARE********-plugin
app.use(express.urlencoded({extended:false}));
//because of urlencoded 
// console.log(req.body)->values
//without use of urlencoded 
// console.log(req.body)->undefind
//urlencoded  
// (string convert into object(understand by express) it is working of this middelware ,
//  and ye req ko lekar req.body main value daal deta hai object ke form main ab koi bhi us value ko req.body karke value le sakta hai ab undefined nhi aye ga)

//case-1(in pending state because no use of next())
// app.use((req,res,next)=>{
//   console.log("hi i am from middle ware 1");
// })
// app.use((req,res,next)=>{
//  return res.json(`hi i am from middle ware 2`);
// })

//case-2(only calling of middelware by another middelware no any get req execute)
// app.use((req,res,next)=>{
//   console.log("hi i am from middle ware 1");
//   next();
// })
// app.use((req,res,next)=>{
//  return res.json(`hi i am from middle ware 2`);
// })


//case-3(only calling of middelware by another middelware no any get req execute due to return of respones in middleware 2)
// app.use((req,res,next)=>{
//   console.log("hi i am from middle ware 1");
//   next();
// })
// app.use((req,res,next)=>{
//  return res.json(`hi i am from middle ware 2`);
//  next();//it can't run because after return statement return
// })

//case-4(execution of middelware and calling(next()) of middelware by another middelware and also execute get req)
// app.use((req,res,next)=>{
//   console.log("hi i am from middle ware 1");
//   next();
// })
// app.use((req,res,next)=>{
//   console.log("hi i am from middle ware 2");
// //imp keyword to move from one middleware to another middleware 
// //or move from from one middleware to normal method 
//   next();
// })
// app.get("/api/users",(req,res)=>{
//     return res.json(users);
// })

// case-5(middleware create own variable(req.set))
// app.use((req,res,next)=>{
//   console.log("hi i am from middle ware 1");
//   next();
// })
// app.use((req,res,next)=>{
//     req.set="123";//by middleware
//  next();
// })
// app.get("/api/users",(req,res)=>{
//     console.log(req.set);//by middleware
//      console.log(req.body);//by client (postman)
//     return res.json(users);
// })


// case-5(middleware create own variable(req.set))
app.use((req,res,next)=>{
  console.log("hi i am from middle ware 1");
  next();
})
app.use((req,res,next)=>{
    if(req.body.user==123){req.set="approval";//by middleware
        }
 next();
})
app.get("/api/users",(req,res)=>{
    if(req.set=="approval"){
        console.log("password is correct\n");
    return res.json(users)
};
    return res.json(`somthing error`);
})


app.listen(PORT,
  ()=>console.log(`server started at path ${PORT}`));