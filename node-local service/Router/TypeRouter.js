const express=require('express')
const router=express.Router()

const Typecontroller=require('../Controller/Typecontroller')

router.get('/find',Typecontroller.getalltype)
router.get('/find/:id',Typecontroller.gettype)
router.post('/add',Typecontroller.addtype)
router.put('/update/:id',Typecontroller.updatetype)
router.delete('/deleat/:id',Typecontroller.deleattype)

module.exports=router