const ContectSchema=require("../Schema/ContectSchema")



const addcontact=(req,res)=>{
    console.log(req.body)
    const contact=new ContectSchema(req.body)

    contact.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add contact"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add contact",
                data:data
            })
        }
    })
}
const findallcontact=(req,res)=>{
    ContectSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching contact"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(505).json({
                    message:"err for finding contact"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully find contact",
                    data:data
                })
            }
        }
    })
}

module.exports={
    addcontact,
    findallcontact
}