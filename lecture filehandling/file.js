//******/ hum js ke sath ye kuch bhi kaam nhi kar sakte hai lakin node js hume fs module provide karti hain jiske through hum file ke sath ye work kar sakte hai******

// console.log(fs);

//sync write...
// fs.writeFileSync('./write.txt',`"i need to study about node11 js "`);

//async write... (it provide arrow function )
// fs.writeFile('./write.txt',`"i need to study about node11 js "`,(err)=>{});


//sync read....//return fetching info..
// const result = fs.readFileSync('./contact.txt',"utf-8");
// console.log(result);
//utf( unicode transfer formate (easily convert any type(like - vedio file, image file etc) of file decoding))
//file read & value store in the variable "result"

// async read...//nothing return anthing provide extra call back function
// ❌❌const r=fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error"+err);
//         }
//         else{
//             console.log(result);            
//         }
// })

// ✅✅fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error"+err);
//         }
//         else{
//             console.log(result);
//         }
// })


// appendFileSync() this function is used to concatinate words in any file 
// hum iska use koi important details stored karwane ke liye karte hai like i.p address or timing of visiting
// fs.appendFileSync("./test.txt",`hey i am programmer\n`);
// fs.appendFileSync("./test.txt","hey i am programmer\n");

//cpsync() function is used to copy file content 
// fs.cpSync("./test.txt","./copy.txt");

//to delete an file so we use unlinkSync() function
// fs.unlinkSync("./waste.txt");  //waste.txt file is deleted 

const { log } = require('console');
const fs=require('fs');
// operation to detail of file 
// console.log(fs.statSync("./test.txt").isFile());
// console.log(fs.statSync("./test.txt").birthtime);
