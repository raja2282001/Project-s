const express=require("express")
const router=express.Router()
const CatController=require('../Controller/Catcontroller')

router.get('/find',CatController.getallcat)
router.post('/add',CatController.addcat)
router.get('/find/:id',CatController.getcat)
router.put('/update/:id',CatController.updatecat)
router.delete('/deleat/:id',CatController.deleatcat)

module.exports=router