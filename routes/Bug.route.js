const express = require("express");
const bugRouter = express.Router();
const { BugModel } = require("../model/Bug.model");



bugRouter.get("/",async(req,res)=>{
    try{
        const data =  await BugModel.find() 
        res.send(data)
   }catch(err){
       console.log(err)
    res.send("somthing error in create bug")
   }

});


bugRouter.get("/:category",async(req,res)=>{

    const bugType=req.params.category;
    try{
        const data =  await BugModel.find({category:bugType})
        res.send(data)
   }catch(err){
       console.log(err)
    res.send("somthing error in getting bug")
   }
});


bugRouter.post("/create",async(req,res)=>{
    try{
         const data = req.body
         const bug = new BugModel(data)  
          await bug.save()
         res.send({msg:"bug added successfully"})
    }catch(err){
        console.log(err)
     res.send("somthing error in create bug")
    }
})



bugRouter.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    await BugModel.findOneAndDelete({_id:id});
    res.send({msg:"bug delted successfully"});
});

module.exports = {bugRouter}

