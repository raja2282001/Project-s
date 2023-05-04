const express=require('express')
const router=express.Router()

const UserController=require('../Controller/UserController')

router.get('/find',UserController.findealluser)
router.post('/add',UserController.registerUser)
router.get('/find/:id',UserController.findeuserById)
router.put('/update/:id',UserController.updateuser)
router.delete('/deleat/:id',UserController.deleatuser)
router.post('/find/login',UserController.loginUser1)


module.exports=router