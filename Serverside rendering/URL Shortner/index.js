const express = require('express');
const path=require('path')
const { connectiondb } = require("./connection");
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const staticRoute=require("./routes/staticRouter")

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

//server side rendering way one write hardcode html ---
// app.get("/test",(req,res)=>{
//    return res.end("<h1>Hey From Server side rendering</h1>")
// });
// server side rendering way one write hardcode html its hardcode is very pain full difficult to work like that way we use EJS
// app.get("/test", async(req, res) => {
//     const allUrls = await URL.find({});
//     return res.end(`<html>
//         <head>
//         <body>
//                 <ol>
//                 ${allUrls.map(url=>`<li>${url.shortId}-${url.redirectURL}-${url.visitHistory.length}</li>`).join('')}
//                 </ol>
//         </body>
//         </head>
//      </html>`)
// });
app.use(express.json());/// hum json data ko support karenge
app.use(express.urlencoded({ extended: false }));//hum form(html) ke data ko support karenge aur body naam ke object form data put kar dega
app.use("/url", urlRoute)

app.use("/",staticRoute);
app.listen(PORT, () => console.log(`server started at path ${PORT}`));

///js templeting engin EJS AND PUG