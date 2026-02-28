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



//  const http=require("http");
// //  console.log(http)
// const fs=require("fs");
// // console.log(fs)
// const url=require("url");
// const myserver=http.createServer((req,res)=>{
//     if(req.url==="/favicon.ico") return res.end();
// console.log("New Req Rec.");
// const log=`${Date.now()/60/60/60/24/365}: new req recived from ${req.url} \n`;
// const myurl = url.parse(req.url,true);
// console.log(myurl);
// fs.appendFile('log.txt',log,(err,data)=>{
    
//    switch(myurl.pathname){
//     case '/home':
//         res.end(`hi this is ${myurl.query.myname} page`);
//     break;
//     case '/':
//         res.end(`hi this is ${myurl.query.myname} page`);
//     break;
//     case '/contact':
//         res.end(`hi this is ${myurl.query.myname} page`);
//     break;
//     default: 
//     res.end("404 server down baag jaaa yahan se");
//    }
// })
// });
// myserver.listen(8000,()=>console.log("server is activated"));
 const http=require("http");
//  console.log(http)
const fs=require("fs");
// console.log(fs)
const url=require("url");
let s1="";
function cal(s){
    
for(let i=1;i<s.length;i++)
{
    s1=s1+s[i];
}
        return s1;

} 
const myserver=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
console.log("New Req Rec.");
const log=`${Date.now()/60/60/60/24/365}: new req recived from ${req.url} \n`;
const myurl = url.parse(req.url,true);
console.log(myurl);
fs.appendFile('log.txt',log,(err,data)=>{
    
   switch(myurl.pathname){
    case '/':
        res.end(`hi this is${myurl.pathname} , ${myurl.query.myname} page`);
    break;
    case '/about':


        res.end(`hi this is ${cal(myurl.pathname)} , ${myurl.query.myname}page`);
    break;
    case '/contact':
        res.end(`hi this is ${myurl.pathname} , ${myurl.query.myname} page`);
    break;
    default: 
    res.end("404 server down baag jaaa yahan se");
   }
})
});
myserver.listen(8000,()=>console.log("server is activated"));