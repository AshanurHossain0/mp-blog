require('dotenv').config();
const authorModel=require('../models/authorModel');
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const {validEmail,validName,validTitle, validCity}=require('../validator/validate');

const register = async function (req, res) {
    try {
        let { fullName, city, title, email, password } = req.body;

        if(!fullName || !title || !email || !password || !city) {
            return res.status(400).send({ status: false, msg: "Mandatory fields are required !"})
        }
        email=email.toLowerCase();
        fullName=fullName.trim();email=email.trim();password=password.trim();city=city.trim();

        if(! validTitle(title)){
            return res.status(400).send({ status: false, msg: "Title must be [Mr / Mrs / Miss]" })
        }

        if(! validEmail(email)){
            return res.status(400).send({status:false,msg:"Invalid email"})
        }

        if(!validName(fullName)){
            return res.status(400).send({ status: false, msg: "Invalid full name"})
        }

        if(! validCity(city)){
            return res.status(400).send({ status: false, msg: "Invalid city name"})
        }

        if(password.length<8 || password.length>16){
            return res.status(400).send({ status: false, msg: "Password should be  minimum 8 characters and maximum 16" })
        }

        const findUser = await authorModel.findOne({email})
        if (findUser) {
            return res.status(400).send({ status: false, msg: "Email already exist, login now"})
        }
        const hashedPass = bcrypt.hashSync(password,8)

        const data = await authorModel.create({ fullName, city, title, email, password:hashedPass })
        res.status(201).send({ status: true,data})
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const login = async function (req, res) {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ status: false, msg: "Email and password are mandatory" })
        }

        email=email.toLowerCase()
        email=email.trim();password=password.trim();

        let user = await authorModel.findOne({ email })
        if (!user) {
            return res.status(400).send({ status: false, msg: "No user is found with this email"})
        }

        const isCorrectPassword=bcrypt.compareSync(password, user.password)
        if(! isCorrectPassword) return res.status(400).send({status:false,msg:"Incorrect password"})

        let payload = {
            exp: Math.floor(Date.now() / 1000) + 12*3600,
            iat: Date.now(), userId: user["_id"],
        };
        let token = jwt.sign(payload, process.env.SECRET);
        return res.status(200).send({ status: true, token,data:user })
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
    }
}

const getUser = async function (req, res) {
    try {
        const userId=req.token.userId;

        let user = await authorModel.findById(userId);
        if (!user) {
            return res.status(400).send({ status: false, msg: "No user is found"})
        }

        return res.status(200).send({ status: true,data:user})
    }
    catch(err){
        res.status(500).send({status:false, msg:err.message})
    }
}

module.exports={register,login,getUser}
