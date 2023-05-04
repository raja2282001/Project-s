const express=require('express')
const router=express.Router()

const Rolecontroller=require('../Controller/RoleController')

router.get('/find',Rolecontroller.getAllRoles)
router.post('/add',Rolecontroller.addRole)
router.get('/find/:id',Rolecontroller.getRoleById)
router.delete('/delete/:id',Rolecontroller.deleatrole)
router.put('/update/:id',Rolecontroller.updaterole)

module.exports=router