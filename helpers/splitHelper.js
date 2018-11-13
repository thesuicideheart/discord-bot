var group = {};
module.exports.split = (classReacts, playersInVoice) => {
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
        { name: "Dummy1341", value: "Warrior" },
        { name: "Dummy46", value: "Warrior" },
        { name: "Dummy1214", value: "Warrior" },
        { name: "Dummy426", value: "Warrior" },
        { name: "Dummy113", value: "Warrior" },
        { name: "Dummy446", value: "Warrior" },
        { name: "Dummy131", value: "Warrior" },
        { name: "Dummy222", value: "Paladin" },
        { name: "Dummy34", value: "Paladin" },
        { name: "Dummy42", value: "Wizard" },
        { name: "Dummy4234", value: "Ninja" },
        { name: "Dummy42123", value: "Samurai" },
        { name: "Dummy4221", value: "Priest" },
        { name: "Dummy42441", value: "Wizard" },
        { name: "Dummy4442", value: "Priest" },
        { name: "Dummy4442", value: "Priest" },
        { name: "Dummy4142", value: "Priest" },
        { name: "Dummy4942", value: "Priest" },
        { name: "Dummy41482", value: "Priest" },
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
        "Dummy25",
        "Dummy32",
        "Dummy46",
        "Dummy1341",
        "Dummy46",
        "Dummy1214",
        "Dummy426",
        "Dummy113",
        "Dummy446",
        "Dummy131",
        "Dummy222",
        "Dummy34",
        "Dummy42",
        "Dummy4221",
        "Dummy42441",
        "Dummy4442",
        "Dummy4442",
        "Dummy4442",
        "Dummy4142",
        "Dummy4942",
        "Dummy41482"
    ];

    var actualArr = {};//schema: ["Class"] : [PlayerNameStringArr]

    classReacts.forEach(cr => {
        if (playersInVoice.indexOf(cr.name) !== -1) {
            if (cr.value !== "Knight" && cr.value !== "Warrior" && cr.value !== "Paladin" && cr.value !== "Priest") {
                cr.value = "Other"
            }
            var stringArr = actualArr[cr.value] != null ? actualArr[cr.value] : [];
            stringArr.push(cr.name);
            actualArr[cr.value] = stringArr;
        }
    });

    splitGroups(actualArr);
}

function XD(corner, arrayOfPpl, index) {
    var xD = group[corner] != null ? group[corner] : [];
    var react = {
        class: index,
        player: arrayOfPpl[index][i]
    };
    xD.push(react);
    group[corner] = xD;
}

function splitPalliesAndWarriors(arrayOfPpl, index) {
    for (var i = 0; i < arrayOfPpl[index].length; i++) {
        for (var k = 0; k <= Math.round(arrayOfPpl[index].length / 4); k++) {
            if (i == (4 * k + 0)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned top left corner`);
                XD("TL", arrayOfPpl, index);
            }
            else if (i == (4 * k + 1)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned bottom right corner`);
                XD("BR", arrayOfPpl, index);
            }
            else if (i == (4 * k + 2)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned top right corner`);
                XD("TR", arrayOfPpl, index);
            }
            else if (i == (4 * k + 3)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned bottom left corner`);
                XD("BL", arrayOfPpl, index);
            }
        }
    }
}

function splitKnightsAndPriests(arrayOfPpl, index) {
    for (var i = 0; i < arrayOfPpl[index].length; i++) {
        for (var k = 0; k <= Math.round(arrayOfPpl[index].length / 4); k++) {
            if (i == (4 * k + 0)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned bottom left corner`);
                XD("BL", arrayOfPpl, index);
            }
            else if (i == (4 * k + 1)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned top right corner`);
                XD("TR", arrayOfPpl, index);
            }
            else if (i == (4 * k + 2)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned bottom right corner`);
                XD("BR", arrayOfPpl, index);
            }
            else if (i == (4 * k + 3)) {
                console.log(`${index}: ${arrayOfPpl[index][i]} you are assigned top left corner`);
                XD("TL", arrayOfPpl, index);
            }
        }
    }
}

function splitOther(arrayOfPpl, i, k) {
    if (i == (4 * k + 0)) {
        console.log(`Other: ${arrayOfPpl["Other"][i]} you are assigned bottom left corner`);
        XD("BL", arrayOfPpl, "Other");
    }
    else if (i == (4 * k + 1)) {
        console.log(`Other: ${arrayOfPpl["Other"][i]} you are assigned top right corner`);
        XD("TR", arrayOfPpl, "Other");
    }
    else if (i == (4 * k + 2)) {
        console.log(`Other: ${arrayOfPpl["Other"][i]} you are assigned bottom right corner`);
        XD("BR", arrayOfPpl, "Other");
    }
    else if (i == (4 * k + 3)) {
        console.log(`Other: ${arrayOfPpl["Other"][i]} you are assigned top left corner`);
        XD("TL", arrayOfPpl, "Other");
    }
}

function splitGroups(arrayOfPpl) {
    if (arrayOfPpl["Paladin"].length > 0) {
        splitPalliesAndWarriors(arrayOfPpl, "Paladin");
    }

    if (arrayOfPpl["Warrior"].length > 0) {
        splitPalliesAndWarriors(arrayOfPpl, "Warrior");
    }

    if (arrayOfPpl["Knight"].length > 0) {
        splitKnightsAndPriests(arrayOfPpl, "Knight")
    }

    if (arrayOfPpl["Priest"].length > 0) {
        splitKnightsAndPriests(arrayOfPpl, "Priest");
    }

    if (arrayOfPpl["Other"].length > 0) {
        for (var i = 0; i < arrayOfPpl["Other"].length; i++) {
            for (var k = 0; k <= Math.round(arrayOfPpl["Other"].length / 4); k++) {
                splitOther(arrayOfPpl, i, k);
            }
        }
    }
}
