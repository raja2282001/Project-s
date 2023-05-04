const express=require("express")
const router=express.Router()
const Servicenamecontroller=require('../Controller/ServicenameController')

router.post("/add",Servicenamecontroller.addservicename)
router.get('/find',Servicenamecontroller.getallsetrvicename)
router.get('/find/:id',Servicenamecontroller.getservicename)
router.put('/update/:id',Servicenamecontroller.updateservicename)

module.exports=router