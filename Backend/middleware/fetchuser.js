var jwt = require('jsonwebtoken');
const jwt_secret = "$Thisisusedtosecuredata";

const FetchUser = (req,res,next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).send({ error: "Token is Not Vaid" });
    }

    try{
           //  This will fetch id from token
           const data = jwt.verify(token,jwt_secret);
           req.user = data.user
           next();
    }
        catch (error) {
            return res.status(401).send({ error: "Token is not Matched " });
        }
}

module.exports = FetchUser

