const { FRHELP, ENHELP } = require("./commands");

module.exports = (client, msg, language) => {
    let helpEmbed;
    if (language === "fr") {
        helpEmbed = FRHELP;
    } else if (language === "en") {
        helpEmbed = ENHELP;
    }
    msg.channel.send({ embed: helpEmbed });
};
