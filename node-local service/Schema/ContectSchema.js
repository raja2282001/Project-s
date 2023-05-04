const mongoose=require("mongoose")
const Schema=mongoose.Schema

const contactSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("contact",contactSchema)