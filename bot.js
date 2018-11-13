const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const path = require("path")
// const config = require('./config/config.json');
const config = require('./config.json');
const Enmap = require('enmap');

/* Database configuration */
const database = require('./db/dbconfig');

/* Init database */
database.init();

const userDataAccessObject = require('./dao/UserDAO');
var userDAO = new userDataAccessObject();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client, "test"));
  });
});

client.config = config;
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.on('messageReactionAdd', (reaction, user) => {
  // console.log(reaction.users);
});

client.on('messageReactionRemove', (reaction, user) => {
  // console.log(reaction.users);
})
// client.on("message", async message => { // Everything Below Here & Indented Within This Line Requires Prefix.
//   if (message.author.bot) return; // Prevent Bot from Responding to Other Bots
//   if (!message.guild) return;
//   if (message.content.indexOf(config.prefix) !== 0) return; // Must Use Prefix

//   let prefix = config.prefix;
//   let messageArray = message.content.split(" ");
//   let cmd = messageArray[0];
//   let args = messageArray.slice(1);
//   let commandfile = client.commands.get(cmd.split(prefix)[1]);
//   if (commandfile) commandfile.run(config, client, message, args);
// });

client.on("guildMemberRemove", (member) => {
  var ign = member.displayName;
  userDAO.markUserAsDeleted(ign).catch(err => { console.log(err); })
  client.channels.get(config.botLogChannelId).send(`User ${ign} left the discord at: ${new Date().toUTCString()}`);
});

client.on('error', console.error); //Will crash if not handled

client.on('ready', () => {
  let date = new Date();
  console.log(`Logged in as ${client.user.tag}, started on ${date}!`);
  client.user.setActivity('with gems', { type: 'Playing' });
  client.user.setStatus('dnd');
});

// client.on('message', msg => {
//   let prefix = config.prefix;
//   let msgArr = msg.content.split(" ");
//   let command = msgArr[0];
//   let args = msgArr.slice(1);
//   if (msg.content)
//     console.log(client.commands.get(command.slice(prefix.length)));
//   if (command === prefix + 'startvoidrun') {
//     console.log('pong');
//     const embedMsg = new Discord.RichEmbed()
//       .setTitle("XD").addField("XD", "123XD").addField("34534543 :LingoKnight:", "qwe234").addField("adasd", "asdqwe").setColor('00cc00').setFooter('Lingo Halls Xd');
//     msg.channel.send(embedMsg);
//   } else if (command === prefix + 'startcultrun') { }
//   else if (command === prefix + 'startsplitrun') { }
//   else {

client.login(config.token);