re
const express = require("express");
const cors =require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send({massage:"seccuse"})
})

app.listen(port,()=>{
    console.log(`new server ${port}`)
})