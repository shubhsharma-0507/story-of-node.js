const uti=require('./math');
console.log(uti.addfn(6,7));


// ⬇️ another way 
//math.js
// function add(a,b){
//     return a+b;
// }
// 
// module.exports=add
// hello.js
// const math=require('./math');
// console.log(math(5,10));//its only for understand add(5,10);
// ⬆️

// ⬇️ another way 
//math.js
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// module.exports={
//     add,
//     sub
// };
// hello.js
// const math=require('./math');
// console.log(math.add(5,10)+" "+math.sub(10,5));
// ⬆️

// ⬇️ another way 
//math.js
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// module.exports={
//    addfn: add,
// subfn: sub
// };
// hello.js
// const {addfn,subfn}=require('./math');
// console.log(addfn(4,5)+""+subfn(4,5));
// ⬆️
// ⬇️ another way 
//math.js
// exports.add=(a,b)=>a+b;
// exports.sub=(a,b)=>{return a-b};
// hello.js
// const {addfn,subfn}=require('./math');
// console.log(addfn(4,5)+""+subfn(4,5));
// ⬆️