const mongoose = require("mongoose")


const bugSchema = mongoose.Schema({
    "bug":{type:String ,required:true},
    "category":{type:String ,required:true }
})

const BugModel = mongoose.model("bug",bugSchema)
module.exports = {BugModel}

