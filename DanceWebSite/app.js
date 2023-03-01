const express=require("express");
const path =require("path");
const app=express();
const port=8000;

// Express Specific Stuff
app.use('/static',express.static('static')) // For serving static file
app.use(express.urlencoded())

//Pug Specific Stuff

app.set('view engine','pug') // set the template engine as pug
app.set('views',path.join(__dirname,'views')) // set the view directory

//Endpoint

app.get('/',(req,res)=>{
    const con="That's how, we will learn the how to stand a website "
    const params={}
    res.render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const con="That's how, we will learn the how to stand a website "
    const params={}
    res.render('contact.pug',params);
})
// start the server

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})