const express=require("express")
const app=express();
const port=5500;

app.get("/",(req,res)=>{
    res.write("<h1> Hello from home side<h1> ");
    res.write("<h1> Hello from home side again <h1> ");
    res.send();
})
/*
app.get("/temp",(req,res)=>{
    res.send([
        {
        id:1,
        name:"Shubham"
        },
        {
        id:2,
        name:"Shubh"
        },
        {
        id:3,
        name:"Maan"
         },
])
})
*/
app.get("/temp",(req,res)=>{
    res.json([
        {
        id:1,
        name:"Shubham"
        },
        {
        id:2,
        name:"Shubh"
        },
        {
        id:3,
        name:"Maan"
         },
])
})
app.listen(5500,()=>{
    console.log(` listening from port ${port}`);
})