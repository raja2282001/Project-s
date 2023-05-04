const ServiceSchema=require('../Schema/ServiceSchema')

const addservice=(req,res)=>{
    console.log("service...",req.body)

    const service=new ServiceSchema(req.body)
    service.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add service"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add service",
                data:data
            })
        }
    })
}
const getallservices=(req,res)=>{
    ServiceSchema.find().populate('cat').populate('subcategory').populate('type').exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching service"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(404).json({
                    message:"data is nota found"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully find services",
                    data:data
                })
            }
        }
    })
}
const getservice=(req,res)=>{
    const id=req.params.id

    ServiceSchema.findById(id).populate('cat').populate('subcategory').populate('type').exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching service"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(404).json({
                    message:"err for finding service"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finding service",
                    data:data
                })
            }
        }
    })
}
const updateService=(req,res)=>{
    const id=req.params.id

    ServiceSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for update service"
            })
        }
        else{
            res.status(202).json({
                message:"successfully update service",
                data:data
            })
        }
    })
}
const deleatservice=(req,res)=>{
    const id=req.params.id

    ServiceSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleat service"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleat service",
                data:data
            })
        }
    })
}
module.exports={
    addservice,
    getallservices,
    getservice,
    updateService,
    deleatservice
}