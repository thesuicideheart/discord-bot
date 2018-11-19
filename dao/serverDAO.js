const daoCommon = require('./commons/daoCommon');

class ServerDAO {
    constructor() {
        this.common = new daoCommon();
    }

    updateServerCommandPrefix(serverId){
        //Todo: Implement this
    }

    updateServerPrefixCost(serverId){
        //Todo: Implement this
    }

}

module.exports = ServerDAO;