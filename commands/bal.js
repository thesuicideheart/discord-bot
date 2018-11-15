const Discord = require("discord.js")
const userDataObjectAccess = require("../dao/UserDAO")
const utils = require("../helpers/helper")

module.exports.run = (config,client,message,args) => {
    
    let userDao = new userDataObjectAccess();

    let member = message.mentions.members.first();

    if(member){
        let embed = new Discord.RichEmbed();
        embed.setAuthor(message.author.username, message.author.avatarURL);
        embed.setTitle(`${member.displayName}'s balance`);
        embed.setColor(utils.getRandomColorForEmbed());
    
        embed.setFooter(" © Lil Cold#9128", message.author.avatarURL);
    
        userDao.getUser(member.id)
        .then(user => {
            embed.addField("Money",user.Money,false);
            message.channel.send({embed: embed});
        })
    
    }else{
        let embed = new Discord.RichEmbed();
        embed.setAuthor(message.author.username, message.author.avatarURL);
        embed.setTitle("Your balance");
        embed.setColor(utils.getRandomColorForEmbed());
    
        embed.setFooter(" © Lil Cold#9128", message.author.avatarURL);
    
        userDao.getUser(message.author.id)
        .then(user => {
            embed.addField("Money",user.Money,false);
            message.channel.send({embed: embed});
        })   
    }
}