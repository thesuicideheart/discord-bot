module.exports.moveAllUsersIntoRaidingChannel = (config, client, message, users) => {
    users.forEach(user => {
       var member = message.guild.members.get(user.id);
       member.setVoiceChannel(config.raidingChannelVCId);
    });
}