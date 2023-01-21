const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    "name":{type:String},
    "email":{type:String ,required:true},
    "password":{type:String ,required:true },
    "timestamp":{type:String}
})

const UserModel = mongoose.model("user",userSchema)
module.exports = {UserModel}