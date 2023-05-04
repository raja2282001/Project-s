const BookSchema=require('../Schema/BookSchema')

const addservice=(req,res)=>{
    console.log(req.body)

    const book=new BookSchema(req.body)
    book.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add book service"
            })
        }
        else{
            res.status(202).json({
                message:"successfully add book service"
            })
        }
    })
}

const findallservice=(req,res)=>{
    BookSchema.find().populate("servicename").populate("area").exec((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching book service"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(505).json({
                    message:"err for finding book service"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully finding book service",
                    data:data
                })
            }
        }
    })
}
module.exports={
    addservice,
    findallservice
}