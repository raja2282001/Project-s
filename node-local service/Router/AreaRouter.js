const express=require("express")
const router=express.Router()
const AreaController=require("../Controller/Areacontroller")

router.post("/add",AreaController.addarea)
router.get("/find",AreaController.getallarea)
router.get('/find/:id',AreaController.getarea)
router.delete('/deleat/:id',AreaController.deleatarea)
router.put('/update/:id',AreaController.updatearea)



module.exports=router