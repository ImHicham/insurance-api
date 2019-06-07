let authService = require("../services/AuthService");
let jwt = require('jsonwebtoken');
const config = require("../config");

class AuthController {

    constructor(authService) {
        this.authService = authService;
    }

    async auth(req, res){
        let id = req.body.id;
        let user;
        if(!id) {
            return res.sendStatus(401);
        }
        try{
            user = await this.authService.auth(id);

            let token = jwt.sign({
                data: user
            }, config.auth.jwt.secret, { expiresIn: config.auth.jwt.expiresIn });

            res.status(200).json({ token });
        } catch (err) {
            switch (err.name) {
                case "dataNotFound":
                    res.sendStatus(401);
                    break;
                default:
                    res.sendStatus(500);
                    break;
            }
        }
    }
}

let authController = new AuthController(authService);

module.exports = authController;
