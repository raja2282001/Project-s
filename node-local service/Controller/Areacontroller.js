const AreaSchema=require("../Schema/AreaSchema")

const addarea=(req,res)=>{
    console.log(req.body)

    const area=new AreaSchema(req.body)
    area.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for addarea"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add area",
                data:data
            })
        }
    })
}

const getallarea=(req,res)=>{
    AreaSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching area"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(404).json({
                    message:"err for finde area"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully finding area",
                    data:data
                })
            }
        }
    })
}

const getarea=(req,res)=>{
    const id=req.params.id

    AreaSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finding area"
            })
        }
        else{
            res.status(202).json({
                message:"successfully finding area",
                data:data
            })
        }
    })
}

const deleatarea=(req,res)=>{
    const id=req.params.id

    AreaSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleat area"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleat area",
                data:data
            })
        }
    })
}

const updatearea=(req,res)=>{
    const id=req.params.id

    AreaSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for update area"
            })
        }
        else{
            res.status(202).json({
                message:"successfully update area",
                data:data
            })
        }
    })
}

module.exports={
    addarea,
    getallarea,
    getarea,
    deleatarea,
    updatearea
}