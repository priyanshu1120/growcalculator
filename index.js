const express = require("express")
const app = express()
app.use(express.json())
const {connect} = require("./config/db")
const cors = require("cors")
require("dotenv").config()
const {userRouter} = require("./routes/user.route")
const {authentication} = require("./middleware/authentication")
const {bugRouter} = require("./routes/Bug.route")

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("server run successfully")
})

app.use("/",userRouter)
app.use("/bug",bugRouter)

app.listen(process.env.PORT,async ()=>{
  try{
       await connect
       console.log(`server run on http://localhost:${process.env.PORT}`) 
  }catch(err){
     console.log(err)
  }
    
})
