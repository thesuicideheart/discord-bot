const daoCommon = require('./commons/daoCommon');

class UserDao {
    constructor() {
        this.common = new daoCommon();
    }

    takeMoneyFromUser(discordId , moneyAmount){
        let sqlRequest = `UPDATE Users SET Money = Money - $money WHERE DiscordId = $id`;
        let sqlParams = {
            $money: moneyAmount,
            $id:discordId
        }
        return this.common.run(sqlRequest,sqlParams);
    }

    getWork(workId){
        let sqlRequest = `SELECT * FROM Work WHERE Id=$Id`;
        let sqlParams = {
            $Id: workId
        }
        return this.common.findOne(sqlRequest,sqlParams);
    }

    giveUserMoney(discordId, moneyAmount){
        let sqlRequest = `UPDATE Users SET Money = Money + $moneyAmount WHERE DiscordId = $DiscordId`;
        let sqlParams = {
            $moneyAmount: moneyAmount,
            $DiscordId:discordId
        }
        return this.common.run(sqlRequest,sqlParams);
    }

    addUser(discordId){
        let sqlRequest = `INSERT INTO Users(Level,Exp,ExpRemaining,Gold,Prefix,DiscordId)VALUES(1,0,100,10,"",$DiscordId)`
        let sqlParams = {
            $DiscordId: discordId
        }
        return this.common.run(sqlRequest,sqlParams);
    }

    getUser(discordId){
        let sqlRequest = `SELECT * FROM Users WHERE DiscordId=$DiscordId`
        let sqlParams = {
            $DiscordId: discordId
        }
        return this.common.findOne(sqlRequest,sqlParams);
    }

    doesUserExist(discordId){
        let sqlRequest = `SELECT DiscordId FROM Users WHERE DiscordId=$DiscordId`
        let sqlParams = {
            $DiscordId: discordId
        }
        return this.common.findOne(sqlRequest,sqlParams);
    }
}

module.exports = UserDao;