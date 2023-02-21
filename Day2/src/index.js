// serve the apge on our local host
// follow this code to create own server to host the static website 
const express=require("express");
const path=require("path")
const app=express()
const hbs=require("hbs");
const port=8000

//buit in middle ware

const staticPath=path.join(__dirname,'../public');
const templatePath=path.join(__dirname,'../templates');



// to set the views engine 

app.set('view engine','hbs');
app.set('views',templatePath);


app.use(express.static(staticPath))

// template engine route

app.get("/",(req,res)=>{
   res.render('index',{
    userName:'Shubham',
   });
   
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.get('/', (req,res)=>{
   res.send("Hello from the Express server ")
})

app.listen(port,()=>{
    console.log(`Listesing to the port ${port}`)
})