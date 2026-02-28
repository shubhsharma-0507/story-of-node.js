const express=require('express');
const {connectiondb}=require("./connection");
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app=express();
const PORT=8001;
   connectiondb("mongodb://127.0.0.1:27017/url").then(()=>console.log("Mongodb connected!"));
   app.use(express.urlencoded({extended:false}));
   app.use(express.json());
app.use("/url",urlRoute)
app.listen(PORT,()=> console.log(`server started at path ${PORT}`));