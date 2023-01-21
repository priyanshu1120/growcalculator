const express = require("express");
const calculateRouter = express.Router();

calculateRouter.post("/",(req,res)=>{
    let {amount,rate,year} = req.body
    ratepercent = rate/100
    Maturity  =  amount * [(((1+ratepercent )**year)-1)/ratepercent ]
    res.send({MaturityValue:Math.floor(Maturity),InvestAmount:amount*year,netInterest:Math.floor(Maturity-(amount*year))})
})

module.exports = {calculateRouter}