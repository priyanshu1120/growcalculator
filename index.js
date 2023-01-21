const express = require("express")
const app = express()
app.use(express.json())
const {connection} = require("./config/db")
const cors = require("cors")
require("dotenv").config()
const {userRouter} = require("./routes/user.route")
const {authentication} = require("./middleware/authentication")
const {profileRouter} = require("./routes/profile.route")
const {calculateRouter} = require("./routes/calculate.route")



app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("server run")
})

app.use("/",userRouter)
app.use("/calculate",calculateRouter)
app.use(authentication)
app.use("/profile",profileRouter)

app.listen(process.env.PORT,async ()=>{
  try{
       await connection
       console.log(`server run on http://localhost:${process.env.PORT}`) 
  }catch(err){
     console.log(err)
  }
    
})
