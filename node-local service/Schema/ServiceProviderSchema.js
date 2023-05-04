const mongoose=require("mongoose")
const Schem=mongoose.Schema

const ServiceProviderschem=new Schem({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    area:{
        type:Schem.Types.ObjectId,
        ref:"area"
    },
    servicename:{
        type:Schem.Types.ObjectId,
        ref:"servicename"
    },
    image:{
        type:Schem.Types.ObjectId,
        ref:"Fileuplod"
    }
})

module.exports=mongoose.model("ServiceProvider",ServiceProviderschem)