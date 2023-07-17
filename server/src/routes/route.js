const express=require("express");
const router=express.Router();

const {login,register,getUser,updateUser}=require("../controller/authorCont");
const authentication =require("../middleware/auth")

router.post("/register",register)
router.post("/login",login)
router.get("/user",authentication,getUser);
router.patch("/user",authentication,updateUser);

module.exports=router;