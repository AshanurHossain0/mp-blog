const express=require("express");
const router=express.Router();

const {login,register,getUser,updateUser, verifyOtp, resendOtp}=require("../controller/authorCont");
const {createBlog}=require("../controller/blogCont")
const authentication =require("../middleware/auth")

router.post("/register",register);
router.post("/register/verify",verifyOtp);
router.post("/register/resend",resendOtp);
router.post("/login",login);
router.get("/user",authentication,getUser);
router.patch("/user",authentication,updateUser);

router.post("/blog",authentication,createBlog);

module.exports=router;