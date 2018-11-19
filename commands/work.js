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
                    let amt = Math.floor(helper.getRandomNumber(work.MinimumMoney,work.MaximumMoney));
                    userDao.giveUserMoney(user.DiscordId,amt);
                    embed.setDescription("You worked as " + work.Name + " and earned " + amt);
                    embed.addField("Balance",(user.Money + amt))
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