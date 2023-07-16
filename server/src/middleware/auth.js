require('dotenv').config();
const jwt=require("jsonwebtoken")

const authentication = async function (req, res , next) {
    try {
        let token = req.headers["x-auth-token"]
        if (!token) return res.status(401).send({ status: false, msg: "Token is not provided" })


        jwt.verify(token,process.env.SECRET, function (err, decodedToken) {
            if (err) {
                return res.status(403).send({status:false, msg: err.name });
            } else {
                req.token = decodedToken;
                next();
            }
        });
    }
    catch(err){
        return res.status(500).send({status:false,msg:err.message})
    }
}

module.exports=authentication;