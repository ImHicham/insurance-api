let request = require("request");
const config = require("../config");

class BaseService {
    getClients() {
        return new Promise(function(resolve, reject){
            request(config.services.clientsServiceEndpoint, function (err, response, body) {
                if (err) return reject(err);
                try {
                    resolve(JSON.parse(body).clients);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

    getPolicies() {
        return new Promise(function(resolve, reject){
            request(config.services.policiesServiceEndpoint, function (err, response, body) {
                if (err) return reject(err);
                try {
                    resolve(JSON.parse(body).policies);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }
}

module.exports = BaseService;
