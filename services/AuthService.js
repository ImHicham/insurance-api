let BaseService = require("./BaseService");

class AuthService extends BaseService{

    constructor() {
        super();
    }

    async auth(id) {
        let clientsList;
        try{
            clientsList = await this.getClients();
        } catch (e) {
            throw e;
        }
        let user = clientsList.find((client) => client.id == id);
        if(!user) {
            let error = new Error();
            error.name = "dataNotFound";
            throw error;
        }
        return user;
    }

}

module.exports = new AuthService();

