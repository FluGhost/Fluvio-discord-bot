const json = require('../config.json');

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    // joue à ...
    client.user.setPresence({
        game: { name: `type ${json.prefix}help for help.` },
        status: `online`
    });

}