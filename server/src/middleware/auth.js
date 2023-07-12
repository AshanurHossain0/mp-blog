const jwt=require("jsonwebtoken")

const authentication = async function (req, res , next) {
    try {
        let token = req.headers["x-auth-token"]
        if (!token) return res.status(401).send({ status: false, msg: "Token is not provided" })


        jwt.verify(token, "recipesApp", function (err, decodedToken) {
            if (err) {
                if (err.name === 'JsonWebTokenError') {
                    return res.status(401).send({ status: false, msg: "Invalid token" });
                }

                if (err.name === 'TokenExpiredError') {
                    return res.status(401).send({ status: false, msg: "You are logged out, login again" });
                } else {
                    return res.send({status:false, msg: err.message });
                }
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