let userService = require("../services/UserService");

class UserController {

    constructor(userService) {
        this.userService = userService;
    }

    async byId(req, res) {
        let id = req.params.id;
        let user;
        let statusCode = 200;
        let result;
        try{
            user = await this.userService.findById(id);
            result = user;
        } catch(err) {
            switch (err.name) {
                case "dataNotFound":
                    statusCode = 204;
                    break;
                default:
                    statusCode = 500;
                    break;
            }
        }

        res.status(statusCode).json(result);
    }

    async byUsername(req, res) {
        let username = req.query.username;
        let result;
        let statusCode = 200;
        try{
            result = await this.userService.findByUsername(username);
        } catch(err) {
            switch (err.name) {
                case "dataNotFound":
                    statusCode = 204;
                    break;
                default:
                    statusCode = 500;
                    break;
            }
        }

        res.status(statusCode).json(result);
    }

    async byPolicyNumber(req, res) {
        let policyNumber = req.query.policynumber;
        let result;
        let statusCode = 200;

        try{
            result = await this.userService.findByPolicyNumber(policyNumber);
        } catch(err) {
            switch (err.name) {
                case "dataNotFound":
                    statusCode = 204;
                    break;
                default:
                    statusCode = 500;
                    break;
            }
        }

        res.status(statusCode).json(result);
    }

}

let userController = new UserController(userService);

module.exports = userController;
