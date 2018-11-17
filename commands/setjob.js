const Discord = require("discord.js");
const UserDataAccessObject = require("../dao/UserDAO");
const helper = require("../helpers/helper")

module.exports.run = (config,client,message,args) => {
    
    let userDao = new UserDataAccessObject();
    
    if(args.length > 0){
        let workName = args.join(' ');
        
        userDao.getWorkId(workName)
        .then(work => {
            if(work){
                userDao.setJob(work.Id,message.author.id);
                let embed = new Discord.RichEmbed();
                embed.setAuthor(message.author.username);
                embed.setColor(helper.getRandomColorForEmbed());
                embed.setDescription("You applied for a developer job.\nYou got accepted!\nCongratulations");
                embed.addField("New job",workName);
                message.channel.send({embed: embed});
            }
        });

    }
}