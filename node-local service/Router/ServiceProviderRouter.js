const express=require("express")
const router=express.Router()
const Serviceprovidercontroller=require('../Controller/Serviceprovidercontroller')

router.get('/find',Serviceprovidercontroller.getallserviceprovider)
router.post('/add',Serviceprovidercontroller.addserviceprovider)
router.get('/find/:id',Serviceprovidercontroller.getseviceprovider)
router.put('/update/:id',Serviceprovidercontroller.updateserviceprovider)
router.delete('/deleat/:id',Serviceprovidercontroller.deleatserviceprovider)


module.exports=router