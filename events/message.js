const userDataAccessObject = require("../dao/UserDAO");

// message get parsed anyways
module.exports = (client, db, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    

    let userDao = new userDataAccessObject();

    userDao.doesUserExist(message.author.id)
    .then(user => {})
    .catch(err => userDao.addUser(message.author.id));

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    // run cmd 
    if (cmd.run) {
        cmd.run(client.config, client, message, args);
    }
};