const Discord = require("discord.js")
const userDataObjectAccess = require("../dao/UserDAO")
const utils = require("../helpers/helper")

module.exports.run = (config,client,message,args) => {
    
    let userDao = new userDataObjectAccess();

    let embed = new Discord.RichEmbed();
    embed.setAuthor(message.author.username, message.author.avatarURL);
    embed.setTitle("Your balance");
    embed.setColor(utils.getRandomColorForEmbed());

    embed.setFooter(" © Lil Cold#9128", message.author.avatarURL);

    userDao.getMemberFromDiscordId(message.author.id)
    .then(user => {
        embed.addField("Gold",user.Gold,false);
        message.channel.send({embed: embed});
    })


};