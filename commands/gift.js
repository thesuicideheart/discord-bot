const Discord = require("discord.js")
const userDataObjectAccess = require("../dao/UserDAO")
const utils = require("../helpers/helper")

module.exports.run = (config,client,message,args) => {
    
    let userDao = new userDataObjectAccess();
    
    if(args.length > 0){
        if(args.length >= 2){
            
            let amt = args[1];
            
            let member = message.mentions.members.first();
            
            if(member){
                userDao.getUser(member.id)
                .then(user => {
                    if(user){
                        console.log(user);
                        userDao.doesUserExist(member.id)
                        .then(user2 => {
                            if(user2){
                                
                            }
                        })
                    }else{
                        console.log("error");
                    }
                });
            }

        }
    }else{
        //Send error message xd

    }
}