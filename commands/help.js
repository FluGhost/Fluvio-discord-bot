const { FRHELP } = require("./commands");

module.exports = (client, msg) => {
    msg.channel.send({ embed: FRHELP });
};
