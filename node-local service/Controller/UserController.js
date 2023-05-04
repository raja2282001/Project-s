const UserSchema=require('../Schema/UserSchema')
const encrypt = require('../util/encrypt');
const mailer = require('../util/mailer')

//encrypt login
const loginUser1 = async(req,res)=>{

    UserSchema.findOne({email:req.body.email}).populate('role').exec(async(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in fetching data",
                err:err
            })
        }
        else{

            console.log(data)
            if(data!==null || data!==undefined){
                
                const result = await encrypt.comparePassword(req.body.password,data.password)
                console.log(result)
                if(result==true){
                    res.status(200).json({
                        message:"user found",
                        data:data
                    })
                }
                else{
                    res.status(404).json({
                        message:"user not found",
                    })
                }
            }
            else{
                res.status(404).json({
                    message:"user not found",
                })
            }


        }
    })

}

//encrypt registration
const registerUser = async(req,res)=>{
    const hash = await encrypt.encryptPassword(req.body.password)
    console.log(hash)
    const userData = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        role:req.body.role,
        password:hash
    }

    const user = new UserSchema(userData)
    user.save(async(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding user",
            })
        }
        else{
            const mailres =await mailer.sendMail(req.body.email,"Welcome to our website","Welcome to our website")
            console.log(mailres)
            if(mailres){
                res.status(201).json({
                    message:"user added successfully",
                    data:data
                })
            }
            else{
                res.status(500).json({
                    message:"error in sending mail",
                })
            }
            

            // res.status(201).json({
            //     message:"user added successfully",
            //     data:data
            // })
        }
    })
}






//

const adduser=(req,res)=>{
    console.log(req.body)

    const user=new UserSchema(req.body)
    user.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add user"
            })
        }
        else{
            res.status(200).json({
                message:"successfully adduser",
                data:data
            })
        }
    })
}

const findealluser=(req,res)=>{
    UserSchema.find().populate("role").exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:"err for faching data",
                err:err
            })
        }
        else{
            if(data==null || data==undefined || data.length==0){
                res.status(404).json({
                    message:"err for finding user"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finding user",
                    data:data
                })
            }
        }
    })
}
const findeuserById=(req,res)=>{
    const id=req.params.id

    UserSchema.findById(id).populate('role').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:"err for faching data"
            })
        }
        else{
            if(data!=null || data!=undefined || data.lenght!=0){
                res.status(200).json({
                    message:"successfully finding user",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"err for finding user"
                })
            }
        }
    })
}

const updateuser=(req,res)=>{
    const id=req.params.id

    UserSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching user"
            })
        }
        else{
            res.status(200).json({
                message:"successfully update user"
            })
        }
    })
}
const deleatuser=(req,res)=>{
    const id=req.params.id

    UserSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for deleat uder"
            })
        }
        else{
            res.status(202).json({
                message:"successfully deleat user"
            })
        }
    })
}
const loginuser=(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    if(email==undefined && password==undefined && email=="" && password==""){
        res.status(404).json({
            message:"email and password both are required"
        })
    }
    else{
        UserSchema.find({email:email,password:password}).populate('role').exec((err,data)=>{
            if(err){
                res.status(500).json({
                    message:"err for faching user"
                })
            }
            else{
                if(data==undefined || data==null || data.length==0){
                    res.status(404).json({
                        message:"err for finding user"
                    })
                }
                else{
                    res.status(200).json({
                        message:"successfully login user",
                        data:data
                    })
                }
            }
        })
    }
}

module.exports={
    adduser,
    findealluser,
    findeuserById,
    updateuser,
    deleatuser,
    loginuser,
    loginUser1,
    registerUser
}