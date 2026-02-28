const mongoose=require("mongoose");
// mongoose.set(" strictQuery ",true);
async function connectiondb(url) {
    return mongoose.connect(url);
}

module.exports={connectiondb};