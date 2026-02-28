const express=require('express');
const users=require('./MOCK_DATA.json');
console.log(users)
const app = express();
const PORT=8000;
const fs=require("fs");
const { number } = require('framer-motion');
//MIDDLEWARE********-plugin
app.use(express.urlencoded({extended:false}));
app.get("/api/users1",(req,res)=>{console.log("hii");
    return res.status(100).json(users);
})
app.get("/api/users2",(req,res)=>{console.log("hii");
    return res.status(200).json(users);
})
app.get("/api/users3",(req,res)=>{console.log("hii");
    return res.status(300).json(users);
})
app.get("/api/users4",(req,res)=>{console.log("hii");
    return res.status(400).json(users);
})
app.get("/api/users5",(req,res)=>{console.log("hii");
    return res.status(500).json(users);
})
app.listen(PORT,
  ()=>console.log(`server started at path ${PORT}`));