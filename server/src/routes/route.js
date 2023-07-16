const express=require("express");
const router=express.Router();

const {login,register,getUser}=require("../controller/authorCont");
const authentication =require("../middleware/auth")

router.post("/register",register)
router.post("/login",login)
router.get("/user",authentication,getUser);

module.exports=router;