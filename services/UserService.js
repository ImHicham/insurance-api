let BaseService = require("./BaseService");

class UserService extends  BaseService{

    async findByPolicyNumber(policyNumber) {

        let policiesList = await this.getPolicies();
        let policy = policiesList.find((policy) => policy.id == policyNumber);

        if (!policy) {
            let error = new Error();
            error.name = "dataNotFound";
            throw error;
        }

        let clientsList = await this.getClients();
        let client = clientsList.find((client) => client.id == policy.clientId);

        if(!client) {
            let error = new Error();
            error.name = "dataNotFound";
            throw error;
        }

        return client;

    }

    async findById(id) {
         let clientsList = await this.getClients();
        let client = clientsList.find((client) => client.id == id);

        if(!client) {
            let error = new Error();
            error.name = "dataNotFound";
            throw error;
        }
        return client;
    }

    async findByUsername(username) {
        let clientsList = await this.getClients();
        let clientsFound = clientsList.filter((client) => client.name.indexOf(username) > -1);
        if(clientsFound.length == 0) {
            let error = new Error();
            error.name = "dataNotFound";
            throw error;
        }
        return clientsFound;
    }



}

let userService = new UserService();

module.exports = userService;

