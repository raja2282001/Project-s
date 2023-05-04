const mongoose=require("mongoose")
const Schem=mongoose.Schema

const Typeschem=new Schem({
    name:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Type",Typeschem)