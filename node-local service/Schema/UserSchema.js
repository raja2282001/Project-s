const mongoose=require("mongoose")
const Schem=mongoose.Schema

const Userschem=new Schem({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    role:{
        type:Schem.Types.ObjectId,
        ref:"Role"
    }
})

module.exports=mongoose.model("User",Userschem)

