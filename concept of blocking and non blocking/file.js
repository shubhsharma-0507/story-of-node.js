const { log } = require('console');
const fs=require('fs');
//----> blocking concept by synchronous direct return due to blocking thread
// console.log("1");
// const result=fs.readFileSync("contact.txt","utf-8");
// console.log(result);
// console.log("2");


//-----> non-blocking concept by Asynchronous out through call back
// console.log("1");
// fs.readFile("contact.txt","utf-8",(err,result)=>{console.log(result);});
// console.log("2");


// <%#  <% if (locals.id) { %>  <%# locals ke andar ->>>>return res.render("home",{id:shortid,})<<<-  ismain likhi kawal short id hume locals ke andar mil rahe hai    %>
//      <p> URL Generated : http://localhost:8001/url/<%= id %></p>
//     <% } %>
//     %>

