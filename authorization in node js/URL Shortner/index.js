const express = require('express');
const path=require('path')
const cookieParser=require("cookie-parser");
const { connectiondb } = require("./connection");
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const staticRoute=require("./routes/staticRouter")
const userRoute=require("./routes/users");
const { checkForAuthentication,restrictTo } = require('./middlewares/auth');
const app = express();
const PORT = 8001;
connectiondb("mongodb://127.0.0.1:27017/url").then(() => console.log("Mongodb connected!"));
app.set("view engine","ejs");//humne node js ko bataya ki hum EJS ko use kar rahe hai for serverside rendering ke liye 
app.set('views',path.resolve("./views"));//humne EJS file ko views folder main bana ya hai our yahan humne us view folder ki path bhi de hai taaki nodejs ko pata chale ki humari EJS ke file kaha hai jise render karna hai screen per

app.get("/test", async(req, res) => {
    const allUrls=await URL.find({});
    return res.render('home',
        {urls: allUrls})//home file ko render kar dooo..
}); 
app.use(express.json());/// hum json data ko support karenge
app.use(express.urlencoded({ extended: false }));//hum form(html) ke data ko support karenge aur body naam ke object form data put kar dega
app.use(cookieParser());
app.use(checkForAuthentication);//always call to check authentication
// app.use("/",checkForAuthentication,staticRoute); no need to write this


app.use("/url",restrictTo(["NORMAL","ADMIN"]), urlRoute);//in line middle ware
app.use("/user",userRoute);//form se jab data liye then click kiya submit  button per then  action perform hota hai app.use("/url", urlRoute); it is an path per
app.use("/",staticRoute);
// /url ,urlRoute ---> jab tak user data nahi deta
// /user,userRoute  ---> jab tak user data nahi deta
// / ,staticRoute ---> starting main ye chalega (jab user localhost:/signup,/login,/)
app.listen(PORT, () => console.log(`server started at path ${PORT}`));

///js templeting engin EJS AND PUG