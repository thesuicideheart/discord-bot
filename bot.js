const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config.json');
const Enmap = require('enmap');

/* Database configuration */
const database = require('./db/dbconfig');

/* Init database */
database.init();

client.config = config;
client.commands = new Enmap();

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

client.on('error', console.error); //Will crash if not handled

client.on('ready', () => {
  let date = new Date();
  console.log(`Logged in as ${client.user.tag}, started on ${date}!`);
  client.user.setActivity('with gems', { type: 'Playing' });
  client.user.setStatus('dnd');
});


client.login(config.token);