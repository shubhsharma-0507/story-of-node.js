const express=require("express");
const app=express();
const path=require("path");
const useRouter=require("./routes/user");
const blogRouter=require("./routes/blog")
const cookiePaser = require('cookie-parser')
const { default: mongoose } = require("mongoose");
const { checkForAuthenticationCookie } = require("./Middleware/Authentication");
const PORT=8000;
mongoose.connect("mongodb://localhost:27017/blogify").then(e =>console.log("mongodb is connect"))
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());//pahele ye cookies naam ka object bana dega then fir hum  usee checkForAuthenticationCookie("token") main use kar payenge as req.cookies();
app.use(checkForAuthenticationCookie("token"));
app.get("/",(req,res)=>{
return res.render("home",{
    user:req.user,
});

})
app.use("/user",useRouter);
app.use("/blog",blogRouter)
app.listen(PORT,()=>{console.log(`server has started at port :${PORT}`)});