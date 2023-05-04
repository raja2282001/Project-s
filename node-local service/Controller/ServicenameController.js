const ServicenameSchema=require("../Schema/ServicenameSchema")

const addservicename=(req,res)=>{
    console.log(req.body)

    const servicename=new ServicenameSchema(req.body)

    servicename.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add service name"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add services",
                data:data
            })
        }
    })
}

const getallsetrvicename=(req,res)=>{
    ServicenameSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching servicename"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(503).json({
                    message:"err for finding servicename",
                })
            }
            else{
                res.status(202).json({
                    message:"successfully finding servicename",
                    data:data
                })
            }
        }
    })
}

const getservicename=(req,res)=>{
    const id=req.params.id

    ServicenameSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finding servicename"
            })
        }
        else{
            res.status(202).json({
                message:"successfully finding servicename",
                data:data
            })
        }
    })
}

const updateservicename=(req,res)=>{
    const id=req.params.id

    ServicenameSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(503).json({
                message:"err for update servicename"
            })
        }
        else{
            res.status(404).json({
                message:"successfully update service",
                data:data
            })
        }
    })
}
module.exports={
    addservicename,
    getallsetrvicename,
    getservicename,
    updateservicename
}