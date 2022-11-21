const mongoose = require("mongoose");
const DBConnectionString =process.env.CONNECTION_STRING;

mongoose.connect(DBConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("mongoDB Connected..."))
.catch(error=>{
    console.log("connection error",error);
});
const db =mongoose.connection;

module.exports = db;