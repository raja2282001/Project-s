const SubcatSchema=require('../Schema/SubcatSchema')

const addsubcart=(req,res)=>{
    console.log("subcat...",req.body)

    const subcat=new SubcatSchema(req.body)

    subcat.save((err,data)=>{
        if(err){
            res.subcat(404).json({
                message:"err for add subcat"
            })
        }
        else{
            res.status(200).json({
                message:"successfully add subcat",
                data:data
            })
        }
    })
}

const getallsubcat=(req,res)=>{
    SubcatSchema.find().populate("image").populate("cat").exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching subcat"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(500).json({
                    message:"err for finding subcat"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finde subcat",
                    data:data
                })
            }
        }
    })
}
const getsubcat=(req,res)=>{
    const id=req.params.id

    SubcatSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for finding subcat"
            })
        }
        else{
            res.status(202).json({
                message:"successfully finding subcat",
                data:data
            })
        }
    })
}
const deleatsubcat=(req,res)=>{
    const id=req.params.id

    SubcatSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleat sub cat"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleat sub cat",
                data:data
            })
        }       
    })
}
const updatesubcat=(req,res)=>{
    const id=req.params.id

    SubcatSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for update sub cat"
            })
        }
        else{
            res.status(202).json({
                message:"successfully update sub cat"
            })
        }
    })
}
module.exports={
    addsubcart,
    getallsubcat ,
    getsubcat,
    deleatsubcat,
    updatesubcat
}