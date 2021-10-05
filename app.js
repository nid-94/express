// import requirment
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// import files
const homeRoute = require('./routes/Home');
const serviceRoute =require('./routes/OurService');
const contactRoute = require('./routes/Contact');
const workinTimeRoute = require('./routes/WorkingTime');
// create instance
const app=express();

app.use(bodyParser.urlencoded({extended: false}))
//middleware
let date=new Date();
let day=date.getDay();
let hours=date.getHours();
if (day>0 && day<6 && hours>9 && hours <23){
    app.use(homeRoute);
    app.use(serviceRoute);
    app.use(contactRoute);
}else {
    app.use(workinTimeRoute);
}

//server creation
let port=5000;
app.listen(port,(error)=>{
    error?console.log(error):console.log(`server is running on port: ${port}`);
})