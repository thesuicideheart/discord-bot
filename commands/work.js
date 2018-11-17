const Discord = require("discord.js");
const UserDataAccessObject = require("../dao/UserDAO");
const helper = require("../helpers/helper")


module.exports.run = (config,client,message,args) => {
    let userDao = new UserDataAccessObject();

    let embed = new Discord.RichEmbed();
    embed.setAuthor(message.author.username,message.avatarURL);
    embed.setTitle("Work");
    embed.setColor(helper.getRandomColorForEmbed());
    embed.setFooter(" © Lil Cold#9128", message.author.avatarURL);

    userDao.doesUserExist(message.author.id)
    .then(iUser =>{
        userDao.getUser(iUser.DiscordId)
        .then(user =>{
            if(user.WorkId){
                userDao.getWork(user.WorkId)
                .then(work => {
                    userDao.giveUserMoney(user.DiscordId,work.MoneyPerWork);
                    embed.setDescription("You worked as " + work.Name + " and earned " + work.MoneyPerWork);
                    embed.addField("Balance",(user.Money + work.MoneyPerWork))
                    message.channel.send({embed: embed});
                })
            }else{
                //do soemthing
                embed.setDescription("You are currently unemployed.\nPlease do __***!setjob <job name>***__ to get a job!");
                message.channel.send({embed: embed});
            }
        })
    });

}