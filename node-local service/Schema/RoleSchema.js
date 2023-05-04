const mongoose=require("mongoose")
const Schem=mongoose.Schema

const Rolschem=new Schem({
    name:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Role",Rolschem)