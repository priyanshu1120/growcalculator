const express = require("express");
const calculateRouter = express.Router();

calculateRouter.post("/",(req,res)=>{
    let {amount,rate,year} = req.body

    ratepercent = rate/100
    Maturity  =  amount * [(((1+ratepercent )**year)-1)/ratepercent ]
    Total_Investment_Amount = amount * year
    Total_Interest_Gained  =  Maturity - Total_Investment_Amount
    console.log(Total_Interest_Gained )
//    res.status(200).send(Total_Interest_Gained )
})

module.exports = {calculateRouter}