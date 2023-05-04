const express=require("express")
const router=express.Router()
const Subcartcontroller=require('../Controller/Subcartcontroller')
router.get('/find',Subcartcontroller.getallsubcat)
router.post('/add',Subcartcontroller.addsubcart)
router.get('/find/:id',Subcartcontroller.getsubcat)
router.put('/update/:id',Subcartcontroller.updatesubcat)
router.delete('/deleat/:id',Subcartcontroller.deleatsubcat)
module.exports=router