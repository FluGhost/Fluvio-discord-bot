const fs = require('fs');
const { FRAVATARAUTHER, FRAVATARME, FRAVATARNOTUSER, FREGDM, ENAVATARAUTHER, ENAVATARNOTUSER, ENAVATARME, ENEGDM } = require("./commands");
const easterEgg = require('../easterEgg.json');

let easterEggFound = 0;

module.exports = (client, msg, args, language) => {
    function getUserFromMention(mention) {
        const matches = mention.match(/^<@!?(\d+)>$/);
        if (!matches) return;
        const id = matches[1];
        return client.users.get(id);
    }
    if (args.length === 0) {
    // Si il n'y a pas d'arguments on donne l'avatar de l'auteur du message
        let avatarMeEmbed;
        let displayAvatarMeURLText = msg.author.displayAvatarURL();
        if (language === "fr") {
            FRAVATARME.url = displayAvatarMeURLText;
            FRAVATARME.image = { url: displayAvatarMeURLText };
            avatarMeEmbed = FRAVATARME;
        } else if (language === "en") {
            ENAVATARME.url = displayAvatarMeURLText;
            ENAVATARME.image = { url: displayAvatarMeURLText };
            avatarMeEmbed = ENAVATARME;
        }
        msg.channel.send({ embed: avatarMeEmbed });
    } else {
    // Si il y a des arguments
        const user = getUserFromMention(args[0]); // On récupère l'ID
        if (user) {
            // Si il y a un ID
            let userAvatar = user.displayAvatarURL();
            let avatarAutherEmbed;
            if (language === "fr") {
                FRAVATARAUTHER.title = `Ceci est l'avatar de ${user.tag} !`;
                FRAVATARAUTHER.url = userAvatar;
                FRAVATARAUTHER.image = { url: userAvatar };
                avatarAutherEmbed = FRAVATARAUTHER;
            } else if (language === "en") {
                ENAVATARAUTHER.title = `This is the avatar of ${user.tag} !`;
                ENAVATARAUTHER.url = userAvatar;
                ENAVATARAUTHER.image = { url: userAvatar };
                avatarAutherEmbed = ENAVATARAUTHER;
            }
            msg.channel.send({ embed: avatarAutherEmbed });

            if (user.tag === "FluGhost#7007") {
            // si le tag est moi-même
                let messageEgDM;
                if (language === "fr") {
                    messageEgDM = FREGDM;
                } else if (language === "en") {
                    messageEgDM = ENEGDM;
                }
                msg.author.createDM().then(channel => {
                    channel.send(messageEgDM);
                });
                // console
                console.log(`${msg.author.tag} a trouvé l'easter egg !!`);
                // écrire dans le JSON le nom de la personne qui a trouvé l'EG
                easterEgg[msg.author.tag] = "+1 !";
                fs.writeFile(
                    "easterEgg.json",
                    JSON.stringify(easterEgg, null, 4),
                    err => {
                        if (err) console.log(err);
                    }
                );
                easterEggFound = +1;
                console.log(
                    `Nombre de gens qui ont trouvé l'easter egg : ${easterEggFound}`
                );
            }
        } else {
        // Si il n'y a pas d'ID
            let avatarNotCorrectsArgs;
            if (language === "fr") {
                avatarNotCorrectsArgs = FRAVATARNOTUSER;
            } else if (language === "en") {
                avatarNotCorrectsArgs = ENAVATARNOTUSER;
            }
            msg.reply(avatarNotCorrectsArgs);
        }
    }
};
