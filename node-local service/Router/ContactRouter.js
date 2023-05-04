const exprees=require("express")
const router=exprees.Router()
const ContactController=require('../Controller/ContactController')

router.post("/add",ContactController.addcontact)
router.get("/find",ContactController.findallcontact)

module.exports=router