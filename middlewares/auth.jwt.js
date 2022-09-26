const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config/app.config");
const authGuard = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], jwtSecret, function (err, decode) {
            if (err) {
                return res.status(401).send({message: "Unauthorized!"});
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        return res.status(403).send({message: "No token provided!"});
    }
};

module.exports = authGuard;
