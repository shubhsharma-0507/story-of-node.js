//  const http=require("http");
// const fs=require("fs");
// const myserver=http.createServer((req,res)=>{
// console.log("New Req Rec.");
// const log=`${Date.now()/60/60/60/24/365}: new req recived from ${req.url} \n`;
// fs.appendFile('log.txt',log,(err,data)=>{
   
//     res.end("hello from server");
//     console.log("hii");
// })

// });
// myserver.listen(8000,()=>console.log("server is activated"));



 const http=require("http");
//  console.log(http)
const fs=require("fs");
// console.log(fs)
const myserver=http.createServer((req,res)=>{
console.log("New Req Rec.");
const log=`${Date.now()/60/60/60/24/365}: new req recived from ${req.url} \n`;
fs.appendFile('log.txt',log,(err,data)=>{
    
   switch(req.url){
    case '/home':
        res.end("homepage");
    break;
    case '/':
        res.end("we are team twin buddy");
    break;
    case '/contact':
        res.end("instagram-labh sharma\ninstagram-shubh sharma\n");
    break;
    default: 
    res.end("404 server down baag jaaa yahan se");


   }
})

});
myserver.listen(8001,()=>console.log("server is activated"));