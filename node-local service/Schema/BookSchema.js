const mongoose=require("mongoose")
const Schema=mongoose.Schema

const bookschema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    servicename:{
        type:Schema.Types.ObjectId,
        ref:"Cat"
    },
    // servicetype:{
    //     type:Schema.Types.ObjectId,
    //     ref:"servicename"
    // },
    area:{
        type:Schema.Types.ObjectId,
        ref:'area'
    },
    address:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("bookservice",bookschema)