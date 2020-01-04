const { ENPING, FRPING } = require("./commands");

module.exports = (client, msg) => {
    let pingEmbed; // on déclare la variable qui va être envoyée.
    let ping = msg.createdTimestamp - Date.now(); // créer une variable qui prends le ping.
    if (language === "fr") {
    // si le language est français
        let pingTextFr = `Latence : ${ping} ms.`; // créer le texte principal que va envoyer le bot
        FRPING.description = pingTextFr; // mettre ce texte dans l'embed.
        pingEmbed = FRPING; // mettre ceci dans la variable qui va être envoyée.
    } else if (language === "en") {
        let pingTextEn = `Took : ${ping} ms.`;
        ENPING.description = pingTextEn;
        pingEmbed = ENPING;
    }

    msg.channel.send({ embed: pingEmbed }); // on envoie le message.
};