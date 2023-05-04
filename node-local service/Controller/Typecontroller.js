const TypeSchem=require('../Schema/TypeSchema')

const addtype=(req,res)=>{
    console.log("type...",req.body)

    const type=new TypeSchem(req.body)
    type.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add type"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add type",
                data:data
            })
        }
    })
}

const getalltype=(req,res)=>{
    TypeSchem.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching type"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(500).json({
                    message:"err for finding typedata"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully find type",
                    data:data
                })
            }
        }
    })
}
const gettype=(req,res)=>{
    const id=req.params.id

    TypeSchem.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finde type"
            })
        }
        else{
            res.status(202).json({
                message:"successfully finding type",
                data:data
            })
        }
    })
}
const updatetype=(req,res)=>{
    const id=req.params.id

    TypeSchem.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for update type"
            })
        }
        else{
            res.status(202).json({
                message:"successfully update type",
                data:data
            })
        }
    })
}
const deleattype=(req,res)=>{
    const id=req.params.id

    TypeSchem.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status.json({
                message:"err for deleat type"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleat type",
                data:data
            })
        }
    })
}
module.exports={
    addtype,
    getalltype,
    gettype,
    deleattype,
    updatetype
}