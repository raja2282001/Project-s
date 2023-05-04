
const ServiceproviderSchema=require('../Schema/ServiceProviderSchema')


const addserviceprovider=(req,res)=>{
    console.log("serviceprovider...",req.body)

    const serviceprovider=new ServiceproviderSchema(req.body)
    serviceprovider.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add serviceprovidr"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add serviceprovider",
                data:data
            })
        }
    })
}

const getallserviceprovider=(req,res)=>{
    ServiceproviderSchema.find().populate("area").populate("image").populate('servicename').exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching service provider"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(500).json({
                    message:"err for finding service provider"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finding sevice provider",
                    data:data
                })
            }
        }
    })
}
const getseviceprovider=(req,res)=>{
    const id=req.params.id

    ServiceproviderSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching serviceprovider"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(404).json({
                    message:"err for finding serviceprovider"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finding serviceprovider",
                    data:data
                })
            }
        }
    })
}
const updateserviceprovider=(req,res)=>{
    const id=req.params.id

    ServiceproviderSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"err for updat serviceprovider"
            })
        }
        else{
            res.status(202).json({
                message:"successfully update your serviceprovider",
                data:data
            })
        }
    })
}
const deleatserviceprovider=(req,res)=>{
    const id=req.params.id
    ServiceproviderSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(505).json({
                message:"err for deleat serviseprovider"
            })
        }
        else{
            res.status(200).json({
                message:"successfully deleat serviceprovider",
                data:data
            })
        }
    })
}


/////


module.exports={
    addserviceprovider,
    getallserviceprovider,
    getseviceprovider,
    updateserviceprovider,
    deleatserviceprovider,
}