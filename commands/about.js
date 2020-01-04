const { MessageEmbed } = require ('discord.js');
const json = require("../config.json");

module.exports = (client, msg) => {
    const aboutMessage = new MessageEmbed()
        .setTitle("__**About us.**__")
        .setDescription("Hey, my name is Fluvio, I'm a cool bot !")
        .addField(
            "\u200b",
            `My author is ${json.author} \n My version is \`${json.version}\` \n My languages are : \n . 1. English \n .  2. _soon..._ \n`
        )
        .addField(
            "\u200b",
            `And yes, my source code is public and on GitHub [at this address](https://github.com/FluGhost/Fluvio-discord-bot)`
        )
        // config
        .setColor(json.colorEmbed)
        .setFooter(
            `Bot created by : ${json.author}`,
            "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
        );
    // et on l'envoie
    msg.channel.send(aboutMessage);
};