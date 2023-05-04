const CatSchema=require('../Schema/CatSchema')

const addcat=(req,res)=>{
    console.log("cat",req.body)
    
    const cat=new CatSchema(req.body)
    cat.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add catr"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add cat",
                data:data
            })
        }
    })
}

const getallcat=(req,res)=>{

    CatSchema.find().populate("image").exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching cat"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(500).json({
                    message:"err for finding cat"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finde cat",
                    data:data
                })
            }
        }
    })
}
const getcat=(req,res)=>{
    const id=req.params.id

    CatSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for findbyid cat"
            })
        }
        else{
            res.status(202).json({
                message:"successfully findeid cat",
                data:data
            })
        }
    })
}
const updatecat=(req,res)=>{
    const id=req.params.id

    CatSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for updatecat"
            })
        }
        else{
            res.status(202).json({
                message:"successfully update cat",
                data:data
            })
        }
    })
}
const deleatcat=(req,res)=>{
    const id=req.params.id

    CatSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleat cat"
            })
        }
        else{
            res.status(200).json({
                message:"successfully deleat cat",
                data:data
            })
        }
    })
}
module.exports={
    addcat,
    getallcat,
    getcat,
    updatecat,
    deleatcat
}