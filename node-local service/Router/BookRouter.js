const express=require("express")
const Router=express.Router()
const bookcontroller=require("../Controller/Bookcontroller")

Router.post("/add",bookcontroller.addservice)
Router.get("/find",bookcontroller.findallservice)

module.exports=Router