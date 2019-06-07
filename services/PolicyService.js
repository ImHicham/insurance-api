let BaseService = require("./BaseService");

class PolicyService extends BaseService{

    async findByUsername(username) {

            let clientsList = await this.getClients();
            let clientIdsList =
                clientsList
                .filter((client) => client.name.indexOf(username) > -1)
                .map((client) => client.id);

            if (clientIdsList.length == 0) {
                let err = new Error();
                err.name = "dataNotFound";
                throw err;
            }

            let policiesList = await this.getPolicies();
            let policiesListFiltered = policiesList.filter((policy) => clientIdsList.indexOf(policy.clientId));

            if (policiesListFiltered.length == 0) {
                let err = new Error();
                err.name = "dataNotFound";
                throw err;
            }

            return policiesListFiltered;

    }

}

let policyService = new PolicyService();

module.exports = policyService;

