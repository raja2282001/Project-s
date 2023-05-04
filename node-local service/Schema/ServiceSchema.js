const mongoose=require("mongoose")
const Schem=mongoose.Schema

const Serviceschema=new Schem({
    name:{
        type:String,
        require:true
    },
    servicename:{
        type:String,
        require:true
    },
    cat:{
        type:Schem.Types.ObjectId,
        ref:"Cat",
    },
    subcategory:{
        type:Schem.Types.ObjectId,
        ref:"Subcat",
    },
    type:{
        type:Schem.Types.ObjectId,
        ref:"Type",
    },
    price:{
        type:Number,
        require:true
    },
    area:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
})

module.exports=mongoose.model("Service",Serviceschema)