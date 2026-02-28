const URL = require('../models/url');

const { nanoid } = require('nanoid');
async function handlegenerateNewShortURL(req, res) {
   //middleware ne aa rahi req(user duara aa rahi) ke andar body naam ka  object banaya hai jismain data(example- user duara diya gaya URl ) se aa raha sara data hai jise hum req.body likh kar use kar rahe hai 
   // console.log(req.body)
   //created by middelware itself
   // req:{
            // body:{//alldata}
   
   //                      }
   const body = req.body;
   //  console.log(body);
   if (!body.url) return res.status(400).json({ error: 'url is required' })
   const shortid = nanoid(8);
   // console.log(shortid);
   const urlmap=req.user._id;
   await URL.create({
      shortId: shortid,
      redirectURL: body.url,
      visitHistory: [],
      CREATEBY:req.user._id,//map se liya mongo bd ke user ki id kyonki apne unique id and user login karne wale ki detail map main bhej diyaa setuser() map function ki help se
   }); 
   const allUrls=await URL.find({CREATEBY:urlmap});
// return res.json({id: shortid});
return res.render("home",{
   urls:allUrls
})
}

async function handlegetShortURL(req, res) {
   const shortId =req.params.shortId;
  const entry= await URL.findOneAndUpdate({
      shortId
   },{$push:{visitHistory:{
      timestamp:Date.now()
   }}});
   
   res.redirect(entry.redirectURL)
}
async function handlehistory(req,res) {

     const shortId =req.params.shortId;
  const entry= await URL.findOneAndUpdate({
      shortId
   });
   // console.log(entry.visitHistory.length,entry.redirectURL);
   return res.json({URL: shortId,click: entry.visitHistory.length,redirect_URL: entry.redirectURL,analytics: entry.visitHistory});
}
async function handledeleteShortURL(req, res) {
   const shortId=req.params.shortId;
const handledel=await URL.findOneAndDelete({
   shortId
})


if(!handledel){
   return res.status(404).json({ msg: "URL not found" });
}

return res.json({msg:"deleted successful",})
}

module.exports={handlegenerateNewShortURL,handlegetShortURL,handledeleteShortURL,handlehistory}