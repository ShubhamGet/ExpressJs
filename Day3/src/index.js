const express=require("express")
const path=require('path')
const app=express();

// Express Specific stuff
app.use('/static',express.static('static')) 

// Pug specific stuff
app.get('view engine','pug') // set the view diretory
app.set("views",path.join(__dirname,"views"))

//End point 
app.get('/',(req,res)=>{
    res.render('index.pug')
})

//start the server
app.listen(5500,()=>{
  console.log("We are listening ")
})