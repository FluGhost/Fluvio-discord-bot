const { CHOCOLATE } = require("./commands");

module.exports = (client, msg) => {
    msg.channel.send({ embed: CHOCOLATE });
};
