module.exports.getRandomDestroyResponse = () => {
    var choices = ["Nice try", "You suck lol", "Xd", "ya yeeet", "omae wa mou shindeiru", "maybe try later again", "the only one that can literally kill the server with this command is whoever has the lingo role ;)"];
    return choices[Math.floor(Math.random() * choices.length)];
}

module.exports.getRandomColorForEmbed = () => {
    return parseInt(`0x${Math.floor(Math.random() * 16777215).toString(16)}`);
}

module.exports.getUserFriendlyDate = () => {
    var date = new Date();
    date.getUTCDate();
}