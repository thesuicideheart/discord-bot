module.exports.getEmojiArray = (client, emojiArr) => {
    var reactArr = {};
    for (var i = 0; i < emojiArr.length; i++) {
        reactArr[emojiArr[i].name] = client.emojis.get(emojiArr[i].value);
    }
    return reactArr;
}

module.exports.removePrefixFromDisplayName = (namePrefixes, displayName) => {
    namePrefixes.forEach(prefix => {
        if (displayName.indexOf(prefix) !== -1) {
            var foundPrefix = prefix;
            displayName = displayName.split(foundPrefix)[1];
        };
    });
    return displayName;
}

module.exports.setPrefixOfNewRole = (nickname, role, roleConfig) => {
    var newNickName;
    var prefix;

    roleConfig.rolePrefixes.forEach(r => {
        if (r.name === role) {
            prefix = r.prefix;
            return;
        }
    })
    newNickName = prefix + nickname;
    return newNickName;
}

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

module.exports.SplitAtMBC = (classReacts, playersInVoice) => {
    var grpTopLeft = [];
    var grpTopRight = [];
    var grpBotRight = [];
    var grpBotLeft = [];

    classReacts = [
        { name: "Liinkii", value: "Warrior" },
        { name: "Matizu", value: "Paladin" },
        { name: "Immamlgpro", value: "Knight" },
        { name: "XRomewolvx", value: "Paladin" },
        { name: "NSSC", value: "Knight" },
        { name: "Dummy1", value: "Knight" },
        { name: "Dummy2", value: "Wizard" },
        { name: "Dummy3", value: "Knight" },
        { name: "Dummy4", value: "Paladin" },
        { name: "Dummy12", value: "Knight" },
        { name: "Dummy25", value: "Paladin" },
        { name: "Dummy32", value: "Knight" },
        { name: "Dummy46", value: "Warrior" },
        { name: "Dummy11", value: "Warrior" },
        { name: "Dummy22", value: "Paladin" },
        { name: "Dummy34", value: "Paladin" },
        { name: "Dummy42", value: "Wizard" },
        { name: "Dummy4234", value: "Ninja" },
        { name: "Dummy42123", value: "Samurai" },
        { name: "Dummy4221", value: "Archer" },
        { name: "Dummy42441", value: "Wizard" },
        { name: "Dummy4442", value: "Priest" },
    ];

    playersInVoice = [
        "Liinkii",
        "NSSC",
        "XRomewolvx",
        "Immamlgpro",
        "Dummy1",
        "Dummy2",
        "Dummy3",
        "Dummy4",
        "Dummy12",
        "Dummy22",
        "Dummy34",
        "Dummy42",
        "Dummy4234",
        "Dummy42123",
        "Dummy4221",
        "Dummy42441",
        "Dummy4442"
    ];

    var actualArr = {};//schema: ["Class"] : [PlayerNameStringArr]

    classReacts.forEach(cr => {
        if (playersInVoice.indexOf(cr.name) !== -1) {
            var stringArr = actualArr[cr.value] != null ? actualArr[cr.value] : [];
            stringArr.push(cr.name);
            actualArr[cr.value] = stringArr;
        }
    });

    splitGroups(actualArr);
}

function splitGroups(arr) {
    var m = {};
    var currentGroup = "TL";

    var arrxD = [];

    // split pallies
    if (arr["Paladin"].length > 2) {
        for (var i = 0; i < arr["Paladin"].length; i++) {
            if (m[currentGroup])
                var currentGroupsClasses = arr["Paladin"][i] != null ? arr["Paladin"][i] : [];
            currentGroupsClasses
            m[currentGroup] = arr["Paladin"][i];
            currentGroup = getNextGroup(currentGroup);
        }
    } else { // less than 2 pallies smh my head
        // split opposite
        // split eventually priests to other stuff
    }

    console.log(m);
    // split knights

    // split warriors


    m[currentGroup] = arrxD;

    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
        for (var j = 0; i < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

function getNextGroup(currentGroup) {
    switch (currentGroup) {
        case "TL":
            currentGroup = "TR";
            break;
        case "TR":
            currentGroup = "BR";
            break;
        case "BR":
            currentGroup = "BL";
            break;
        case "BL":
            currentGroup = "TL";
            break;
    }
    return currentGroup;
}