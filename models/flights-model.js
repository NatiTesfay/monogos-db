const { Schema, default: mongoose } = require("mongoose");
const mongoDB = require("mongosh");
userSchema = mongoose.Schema;

const User = new Schema({
    id:Number,
    name:String,
    email:String,
    password:Number,
    country:String,
    age:Number,
    date:{
        type:Data,
        default:Data.now
    },
},
)

module.exports = mongoose.model("user",User);