const express=require('express');
const studentrouter=require('./Student')
const app=express();
const cors=require('cors')
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ozair:rafiganj@cluster0.sityv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
  console.log('database is not connected')
});

mongoose.connection.on('connected',connected=>{
    console.log('database is connected')
  });
 app.use(cors())
  app.use(bodyparser.urlencoded({extended:false}))
  app.use(bodyparser.json())
//app.use(cors)
app.use('/student',studentrouter)
app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is running"
    })
})


module.exports=app;