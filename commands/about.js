const { FRABOUT } = require('./commands');

module.exports = (client, msg) => {
    msg.channel.send({ embed: FRABOUT });
};
