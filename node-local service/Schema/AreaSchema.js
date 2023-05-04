const mongoose=require("mongoose")
const Schem=mongoose.Schema

const areaSchema=new Schem({
    name:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('area',areaSchema)