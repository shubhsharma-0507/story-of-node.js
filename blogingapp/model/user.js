const {createHmac,randomBytes}= require("crypto");
const {model, default: mongoose} = require("mongoose");
const { createTokenForUser } = require("../service/Auth");

const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    salt:{
        type:String,
       
    },
    password:{
        type:String,
        required:true,
        
    },
    profileImageURL:{
        type:String,
        default:"/images/default.svg",

    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER",
    },
},
{timestamps:true}
);

userSchema.pre("save", function (next) {
    const user=this;//refer to caller object

    if(!user.isModified("password")) return;
     const salt=randomBytes(16).toString();
     const hashedPassword=createHmac("sha256",salt)
     .update(user.password)
     .digest("hex");
    
     this.salt=salt;
     this.password=hashedPassword;
    // console.log(next);
    return next;

});
userSchema.static('MatchPasswordAndGenerateToken',async function (email,password) {

const user=await this.findOne({email})
    if(!user) throw new Error('user not found!');
      const salt=user.salt;
     const hashedpassword=user.password;
      const checkedPassword=createHmac("sha256",salt)
          .update(password)
          .digest("hex");
          if(hashedpassword!==checkedPassword) 
            throw new Error('incorrect password!');
            const token=createTokenForUser(user)
        
return token;

})
 
// userSchema.pre("save", async function () {

//     if (!this.isModified("password")) return

//     const salt = randomBytes(16).toString("hex")

//     this.password = createHmac("sha256", salt)
//         .update(this.password)
//         .digest("hex")

//     this.salt = salt
// })

const User = model("user",userSchema);

module.exports = User;