const Discord = require('discord.js')
const fs = require("fs");
const Enmap = require("enmap");


const client = new Discord.Client();
const config = require('./config.json')

client.config = config;
client.commands = new Enmap();

fs.readdir("./events/", (err, files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err,files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName,props);
    });
});

client.on("ready", () => {
    console.log("Bot started");
    client.user.setActivity('the market', {type: 'WATCHING'});
    client.user.setStatus('dnd');
});

client.on("message",(message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    
});


client.login(config.token);