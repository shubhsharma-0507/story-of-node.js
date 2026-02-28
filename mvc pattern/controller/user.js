const User=require('../models/user')

async function HandlegetallUser(req,res) {
   const AlldbUsers= await User.find({});
       
    // const json=AlldbUsers.map((user)=>user);
    //   res.send(json);
   return res.json(AlldbUsers);
}
async function HandleCreateUser(req,res) {
  
    const body = req.body;
    // console.log(body);
    if(
        
        !body ||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title
    )
    {
        return res.status(400).json({msg: "All fields are req..."})
    }
    const result = await User.create({
       

        firstName: body.first_name,
        lastName: body.last_name,
        email:body.email,
        job_title:body.job_title,
        gender:body.gender,
    });
    console.log('result',result);

    return res.status(201).json({msg: "success"});

}

async function HandleGetuserbyId(req,res) {
    const user=await User.findById(req.params.id);
if(!user) return res.status(404);
 return res.json(user); 
}

async function HandleUpdateuserbyId(req,res) {
     await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})

return res.json({status:"success"});
}

async function HandleDeleteuserbyId(req, res) {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
console.log(user);
    if (!user) {
        return res.status(404).json({ statusCode: 404, message: "user not found" })
    }

    return res.json({ status: "deleted successful" })
}

module.exports={
    HandlegetallUser,HandleCreateUser,HandleGetuserbyId,HandleUpdateuserbyId,HandleDeleteuserbyId,
}




