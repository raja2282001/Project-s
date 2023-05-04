const mongoose=require("mongoose")
const Schem=mongoose.Schema

const Catschem=new Schem({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:Schem.Types.ObjectId,
        ref:"Fileuplod"
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Cat",Catschem)