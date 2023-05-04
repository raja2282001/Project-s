const mongoose=require("mongoose")
const Schema=mongoose.Schema

const servicenameSchem=new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("servicename",servicenameSchem)