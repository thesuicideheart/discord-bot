exports.run = (client, message, args) => {

    if(!args || args.size < 1) return message.reply("Must provide a command name to reload");
    const cmdName = args[0];

    if(!client.commands.has(cmdName)){
        return message.reply("That command doesnt exist!");
    }

    delete require.cache[require.resolve(`./${cmdName}.js`)];

    client.commands.delete(cmdName);

    const props = require(`./${cmdName}.js`);

    client.commands.set(cmdName, props);

    message.reply(`The command ${cmdName} has been reloaded`);

};