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
                .then(user =>{
                    if(user){
                        if(amt){
                            userDao.giveUserMoney(member.id,amt);
                            userDao.takeMoneyFromUser(message.author.id,amt);
                            let embed = new Discord.RichEmbed();
                            embed.setColor(utils.getRandomColorForEmbed());
                            embed.setTitle("Gifted some money!");
                            embed.setDescription(`You got gifted some money from ${message.author.username}!`);
                            embed.addField("Sender", message.author.username);
                            embed.addField("Reciever", member.user.username);
                            embed.addField("Amount",amt);
                            message.channel.send(member,{embed: embed});
                        }
                    }
                });
            }

        }
    }else{
        //Send error message xd

    }
}