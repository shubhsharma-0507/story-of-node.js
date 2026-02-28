// const http=require("http");
// const fs=require("fs");
// const url=require("url");
const express=require("express");
const App=express();

App.get('/',(req,res)=>{
    return res.send(" hii i am coder2 "+req.query.myname)
})
App.get('/about',(req,res)=>{
    return res.send(" hii i am coder2 "+req.query.myname)
})
App.listen(8000,()=>console.log("server is activated"));
//                       |||||
//                       \   /
//                        \ /
//                         V   
// const myserver=http.createServer(App)
// myserver.listen(8000,()=>console.log("server is activated"));

// let s1="";
// function cal(s){
    
// for(let i=1;i<s.length;i++)
// {
//     s1=s1+s[i];
// }
//         return s1;

// } 
// const myserver=http.createServer((req,res)=>{
//     if(req.url==="/favicon.ico") return res.end();
// console.log("New Req Rec.");
// const log=`${Date.now()/60/60/60/24/365}: new req recived from ${req.url} \n`;
// const myurl = url.parse(req.url,true);
// console.log(myurl);
// fs.appendFile('log.txt',log,(err,data)=>{
    
//    switch(myurl.pathname){
//     case '/':
//         res.end(`hi this is${myurl.pathname} , ${myurl.query.myname} page`);
//     break;
//     case '/about':


//         res.end(`hi this is ${cal(myurl.pathname)} , ${myurl.query.myname}page`);
//     break;
//     case '/contact':
//         res.end(`hi this is ${myurl.pathname} , ${myurl.query.myname} page`);
//     break;
//     default: 
//     res.end("404 server down baag jaaa yahan se");
//    }
// })
// });