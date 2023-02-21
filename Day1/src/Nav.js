const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello from Home page ")
})
app.get("/about",(req,res)=>{
    res.send("Hello from About page ")
})
app.get("/contact",(req,res)=>{
    res.send("Hello from contact page ")
})
app.get("/servie",(req,res)=>{
    res.send("Hello from servie page ")
})
app.listen(5500,()=>{
  console.log("We are listening ")
})