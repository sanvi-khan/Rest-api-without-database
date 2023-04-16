let users=require('../models/users.model')
const { v4: uuidv4 } = require('uuid');
//get users
const getAllUsers=(req,res)=>{
    res.json(users)
}
//create users
const createUser=(req,res)=>{
let newUser={
id:uuidv4(),
username:req.body.username,
email:req.body.email
}
users.push(newUser)
    res.json(users)
}
//update user
const updateUser=(req,res)=>{
    let id=req.params.id;
    let {username,email}=req.body;
    users.filter((user)=>user.id===id)
    .map((selectedUser)=>{
        selectedUser.username=username;
        selectedUser.email=email;
    })
    res.json(users)
}
//delete user
const deleteUser=(req,res)=>{
    let id=req.params.id;
    users=users.filter((user)=>user.id!==id)

    res.json(users)
}
module.exports={getAllUsers,createUser,updateUser,deleteUser};