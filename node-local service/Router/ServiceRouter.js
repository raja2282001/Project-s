const express=require("express")
const router=express.Router()
const Servicecontroller=require('../Controller/Servicecontroller')
router.get('/find',Servicecontroller.getallservices)
router.post('/add',Servicecontroller.addservice)
router.get('/find/:id',Servicecontroller.getservice)
router.put('/update/:id',Servicecontroller.updateService)
router.delete('/deleat/:id',Servicecontroller.deleatservice)

module.exports=router