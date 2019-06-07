let jwt = require('jsonwebtoken');
const config = require("../config");

/**
 * check user's token authentication
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    let authorizationHeader = req.headers["authorization"];
    if (authorizationHeader != undefined) {
        let jwToken = authorizationHeader.split(" ")[1];
        if (jwToken != undefined) {
            jwt.verify(jwToken, config.auth.jwt.secret, function(err, decoded) {
                if (err) {
                    res.sendStatus(401);
                } else {
                    //save for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else
            res.sendStatus(401);
    } else
        res.sendStatus(401);
}
