const express=require('express')
const {handlegenerateNewShortURL, handlegetShortURL, handledeleteShortURL, handlehistory}=require("../controller/url");
const router=express.Router();
// router.route('/').post(handlegenerateNewShortURL);
router.post('/',handlegenerateNewShortURL)
router.route("/:shortId").get(handlegetShortURL).delete(handledeleteShortURL)
router.get("/analytic/:shortId",handlehistory)

module.exports=router;