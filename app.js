const express=require('express');
const cors=require('cors');
const app=express();
const usersRouter=require('./routes/users.route')
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use('/users',usersRouter)

//Routing error
app.use((req,res,next)=>{
    res.json({message:"route not find"})

})
//server error
app.use((err,req,res,next)=>{
    res.json({meassage:"something broken"})
})

const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log("server is running")
})