const express = require("express");
const profileRouter = express.Router();
const { UserModel } = require("../model/user.model");

profileRouter.get("/",async(req,res)=>{
    const userID = req.body.userID
    try{
         const profile = await UserModel.find({_id:userID})
         res.send(profile)
    }catch(err){
        console.log(err)
         res.send("somthing error")
    }
})

module.exports = {profileRouter}
