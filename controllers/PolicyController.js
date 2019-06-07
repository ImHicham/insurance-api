let policyService = require("../services/PolicyService");

class PolicyController {

    constructor(policyService) {
        this.policyService = policyService;
    }

    async byUsername(req, res) {

        let username = req.query.username;
        let result;
        let statusCode = 200;

        try{
            result = await this.policyService.findByUsername(username);
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

let policyController = new PolicyController(policyService);

module.exports = policyController;
