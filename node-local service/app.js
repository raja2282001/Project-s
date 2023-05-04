const express=require("express")
const mongoose=require("mongoose")
const cors=require('cors')
const bodyParser = require('body-parser')
const app=express()
const PORT=4000
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended:true}))


const Rolerouter=require('./Router/RoleRouter')
const Userrouter=require('./Router/UserRouter')
const serviceproviderrouter=require('./Router/ServiceProviderRouter')
const catrouter=require('./Router/CatRouter')
const Subcatrouter=require('./Router/SubcatRouter')
const Typerouter=require('./Router/TypeRouter')
const Servicerouter=require('./Router/ServiceRouter')
const Arearouter=require("./Router/AreaRouter")
const servicenamerouter=require('./Router/ServicenameRouter')
const FileUploadRouter=require('./Router/FileUploadRoutes')
const BookRouter=require("./Router/BookRouter")
const contectrouter=require("./Router/ContactRouter")
const mailSendRoutes = require('./Router/MailRoutes')
app.use('/role',Rolerouter)
app.use('/user',Userrouter)
app.use('/serviceprovider',serviceproviderrouter)
app.use('/cat',catrouter)
app.use('/subcat',Subcatrouter)
app.use('/type',Typerouter)
app.use('/service',Servicerouter)
app.use("/area",Arearouter)
app.use('/servicename',servicenamerouter)
app.use('/file',FileUploadRouter)
app.use("/bookservice",BookRouter)
app.use("/con",contectrouter)
app.use('/mail',mailSendRoutes)



mongoose.connect("mongodb://127.0.0.1:27017/local-service2",{},(err)=>{
    if(err){
        console.log("err for mongo conection")
    }
    else{
        console.log("successfully conect mongo")
    }
})
app.listen(PORT,()=>{
    console.log("server will be start this port",PORT)
})
//console.log("project implimitation start")