const URL = require('../models/url');
// hi
const { nanoid } = require('nanoid');
async function handlegenerateNewShortURL(req, res) {
   console.log(req.body)
   const body = req.body;
   //  console.log(body);
   if (!body.url) return res.status(400).json({ error: 'url is required' })
   const shortid = nanoid(8);
   console.log(shortid);
   await URL.create({
      shortId: shortid,
      redirectURL: body.url,
      visitHistory: [],
   });
return res.json({id: shortid});

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
console.log(handledel);

if(!handledel){
   return res.status(404).json({ msg: "URL not found" });
}

return res.json({msg:"deleted successful",})
}

module.exports={handlegenerateNewShortURL,handlegetShortURL,handledeleteShortURL,handlehistory}