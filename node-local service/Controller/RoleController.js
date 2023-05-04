const RoleSchema=require("../Schema/RoleSchema")

const addRole = (req,res)=>{
    const role = new RoleSchema(req.body);
    role.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding role",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Role added successfully",
                data:data
            })
        }
    })
}

const getAllRoles = (req,res)=>{


    RoleSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching roles",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined || data.length!=0){
                res.status(200).json({
                    message:"Roles fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Roles not found",
                })
            }
        }
    })

}
const getRoleById=(req,res)=>{
    id=req.params.id

    RoleSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching role"
            })
        }
        else{
            if(data!=undefined || data!=null || data.length!=0){
                res.status(200).json({
                    message:"successfully finding role",
                    data:data
                })
            }
            else{
                res.status(500).json({
                    message:"err for finding data"
                })
            }
        }
    })
}
const updaterole=(req,res)=>{
    id=req.params.id

    RoleSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching role"
            })
        }
        else{
            if(data==null || data==undefined || data.length==0){
                res.status(404).json({
                    message:"err for finding role"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully update role",
                    data:data
                })
            }
        }
    })
}
const deleatrole=(req,res)=>{
    id=req.params.id

    RoleSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"err for faching role"
            })
        }
        else{
            res.status(200).json({
                message:"successfully deleat data",
                data:data
            })
        }
    })
}
module.exports={
    addRole,
    getAllRoles,
    getRoleById,
    updaterole,
    deleatrole
}