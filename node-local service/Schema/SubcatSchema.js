const mongoose=require("mongoose")
const Schem=mongoose.Schema

const Subcatschem=new Schem({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String
    },
    image:{
        type:Schem.Types.ObjectId,
        ref:"Fileuplod"
    },
    cat:{
        type:Schem.Types.ObjectId,
        ref:"Cat"
    }
})

module.exports=mongoose.model("Subcat",Subcatschem)