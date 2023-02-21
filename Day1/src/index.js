const path=require("path")
const express=require("express");
const app=express();
const port=5500

//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))

const staticPath=(path.join(__dirname,'../public'))

// built in middleware
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
   res.send("Hello world from Express js");
})
app.get("/about",(req,res)=>{
    res.send("Hello world from About side ");
 })
app.listen(5500,()=>{
    console.log(`listening the port ${port}`)
})