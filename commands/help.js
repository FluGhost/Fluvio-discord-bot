<<<<<<< HEAD
const { FRHELP } = require("./commands");

module.exports = (client, msg) => {
    msg.channel.send({ embed: FRHELP });
=======
const { FRHELP, ENHELP } = require("./commands");

module.exports = (client, msg, language) => {
    let helpEmbed;
    if (language === "fr") {
        helpEmbed = FRHELP;
    } else if (language === "en") {
        helpEmbed = ENHELP;
    }
    msg.channel.send({ embed: helpEmbed });
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
};
