const {connectiondb}=require("./connection")
const express=require("express");
const {logReqRes}=require("./middlewares/index")
const { html } = require("framer-motion/client");
const userRouter = require("./routes/user")
const app = express();
const PORT=8000;
//connection

   connectiondb("mongodb://127.0.0.1:27017/labhshubh").then(()=>console.log("Mongodb connected!"));

// console.log(User.find({}))

app.use(express.urlencoded({extended:false}));
//Routes
//yahan express path /user/id ko match karega tab jitna match hua hai (/user) uske aage jo match nhi hua (/id) vo userRouter router apne saath function main le jayega
//yahan express path /user/ ko match karengi
app.use(logReqRes('log.txt'));
app.use("/api/users",userRouter);
app.listen(PORT,
  ()=>console.log(`server started at path ${PORT}`));