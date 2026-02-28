const mongoose =require("mongoose");
const express=require('express');
const { html } = require("framer-motion/client");
const app = express();
const PORT=8000;
//connection
const userSchema=new mongoose.Schema({
    //deal with the user
    firstName:{
        type: String,
        required: true,

    },
    lastName:{
        type: String,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    job_title:{
        type: String,
    },
    gender:{
        type: String,
    },


},
{timestamps: true});
const User=mongoose.model("user",userSchema);
console.log(User.find({}))
mongoose.connect("mongodb://127.0.0.1:27017/labhshubh").then(()=>console.log('MongoDB connected')).catch((err)=>console.log('mongo error',err));



//MIDDLEWARE********-plugin
app.use(express.urlencoded({extended:false}));

//put data or create DATA ON MONGO DB
app.post("/api/users",async(req,res)=>{
    const body = req.body;
    console.log(body);
    if(
        
        !body ||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title
    )
    {
        return res.status(400).json({msg: "All fields are req..."})
    }
    const result = await User.create({
       

        firstName: body.first_name,
        lastName: body.last_name,
        email:body.email,
        job_title:body.job_title,
        gender:body.gender,
    });
    console.log('result',result);

    return res.status(201).json({msg: "success"});

});

// get all user from mongo db
app.get("/users",async(req,res)=>{
   const AlldbUsers= await User.find({});
       const HTML= `
       <ul>
       ${AlldbUsers.map((user)=>`<li>${user.firstName}-${user.email}</li>`)
       .join("")}
        </ul>`;
    // const json=AlldbUsers.map((user)=>user);
    //   res.send(json);
    res.send(HTML);
})

//get particular user by id from mongo db
app.route("/api/users/:id")
.get(async (req,res)=>{
// const id=Number(req.params.id);
const user=await User.findById(req.params.id);
if(!user) return res.status(404);
 return res.json(user); 

}).patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})

return res.json({status:"success"});
}).delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
return res.json({status :"deleted successful"});
});


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