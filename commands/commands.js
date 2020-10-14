const json = require("../config.json");
// GLOBAL
exports.CHOCOLATE = {
    image: {
        url: "https://cdn.discordapp.com/attachments/663083076724850729/663083219209551882/chocolate.jpg"
    },
    color: json.colorEmbed,
    footer: {
        text: `Bot crée par : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

// FR
exports.FRPING = {
    title: ":table_tennis: Pong !",
    color: json.colorEmbed,
    footer: {
        text: `Bot crée par : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

exports.FRTEST = `Seul le créateur du bot : ${json.author} a accès à cette commande car ceci est une commande de test exclusivement réservée au développement du bot. Merci de comprendre.`;

exports.FRHELP = {
    title: "Hey ! Voici de l'aide pour vous !",
    description: `~~Ecrivez \`${json.prefix}about\` pour avoir des informations sur le bot.~~ _(bientôt...)_`,
    fields: [
        {
            name: "\u200b",
            value: `__**Préfixe**__ : \`${json.prefix}\` \n
            :pushpin: **Commandes stables :** 
            \n \`${json.prefix}help\` : C'est le message d'aide. Vous êtes sur cette commande ! 
<<<<<<< HEAD
            \n \`${json.prefix}avatar\` + [\`@user\`] : Cela va vous donner votre avatar ou l'avatar d'une autre personne si mentionée en deuxième argument et vous pouvez les télécharger. 
            \n \`${json.prefix}ping\` : Cela va vous donner la latence du bot. 
            \n \`${json.prefix}chocolate\` : Cela va vous donner du chocolat...particulier.`
=======
            \n \`${json.prefix}avatar\` + [\`@user\`] : Cela va vous donner votre avatar ou l'avatar d'une autre personne si mentionée en deuxième argument et vous pouvez les télécharger. \n \`${json.prefix}ping\` : Cela va vous donner la latence du bot.`
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
        },
        {
            name: "\u200b",
            value: "**Commandes instables _(alpha)_ :**"
        },
        {
            name: "Ces commandes peuvent faire crasher le bot ou ne rien faire du tout.",
            value: `\`${json.prefix}about\` : Les informations à propos du bot et de son créateur.`
        },
        /* légende */
        {
            name: '\u200b',
            value: '\u200b'
        },
        {
            name: "**Légende**",
            value: "[] = Argument optionnel. \n () = Argument non-optionnel."
        }
    ],
    /* autres params */
    color: json.colorEmbed,
    footer: {
        text: `Bot crée par : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }

};

exports.FRAVATARME = {
    title: "Ceci est votre avatar !",
    description: "Cliquez sur le titre en bleu pour ouvrir cette image dans votre navigateur, donc vous pouvez la télécharger.",
    /* params */
    color: json.colorEmbed,
    footer: {
        text: `Bot crée par : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

exports.FRAVATARAUTHER = {
    // title: `This is the avatar of ${user.tag} !`
    // url: `${user.displayAvatarURL()}`
    description: "Cliquez sur le titre en bleu pour ouvrir cette image dans votre navigateur, donc vous pouvez la télécharger.",
    /* image: {
        url: user.displayAvatarURL()
    } */
    color: json.colorEmbed,
    // params
    footer: {
        text: `Bot crée par : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

exports.FREGDM = ":tada: Hey ! Tu a trouvé l'easter egg du bot ! GG !";

exports.FRAVATARNOTUSER = `:crossed_swords: Vous n'utilisez pas les bons arguments. Merci de lire ceci pour plus d'informations : \`${json.prefix}help\``;

<<<<<<< HEAD
exports.FRABOUT = {
    title: "__**A propos.**__",
    description: "Hey, je suis Fluvio : un bot cool !",
    fields: [
        {
            name: "\u200b",
            value: `Mon papa est \`${json.author}\` 
            \n Ma version est \`${json.version}\` 
            \n Mes languages sont : 
            \n  1. Français 
            \n  2. _bientôt..._ 
            \n Je n'ai pas de maman, mais il parait que mon papa a copulé avec la librairie \`discord.js\` ! Que je suis chanceux ! 
            \n Mon papa a laissé un clone, une copie de moi sur GitHub [ici](https://github.com/FluGhost/Fluvio-discord-bot) ! Ouah, moi aussi j'ai le droit à un autre un réseau social !`
        }
    ],
    color: json.colorEmbed,
    footer: {
        text: `Bot crée par : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

/**  EN
=======
exports.FRCAKE0 = ":one: Récolte de Cabosse...";
exports.FRCAKE1 = ":two: Escabossage...";
exports.FRCAKE2 = ":tree: Fermentation...";
exports.FRCAKE3 = ":four: Séchage...";
exports.FRCAKE4 = ":five: Torréfaction...";
exports.FRCAKE5 = ":six: Décorticage...";
exports.FRCAKE6 = ":seven: Broyage...";
exports.FRCAKE7 = ":eight: Malaxage...";
exports.FRCAKE8 = ":nine: Conchage...";
exports.FRCAKE9 = ":ten: Tempérage...";
exports.FRCAKE10 = ":one: :one: Moulage et enrobage...";
exports.FRCAKE11 = "Voilà !!";
exports.FRCAKE13 = {
    image: {
        url: "assets/chocolate.jpg"
    }
};

// EN
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
exports.ENPING = {
    title: "Pong !",
    color: json.colorEmbed,
    footer: {
        text: `Bot created by : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

exports.ENTEST = `You don't have the permission to use that command because only the creator of this bot :_ ${json.author} _ has access at this command for the scripting only. Thanks for understand.`;

exports.ENHELP = {
    title: "Hey ! This is help for you !",
    description: `~~Type \`${json.prefix}about\` for informations about the bot.~~ _(soon...)_`,
    fields: [
        {
            name: "\u200b",
            value: `__**Prefix**__ : \`${json.prefix}\` \n
<<<<<<< HEAD
            :pushpin: **Relase commands :**
            \n \`${json.prefix}help\` : This is the help message. And you are on this command.
=======
            :pushpin: **Relase commands :** 
            \n \`${json.prefix}help\` : This is the help message. And you are on this command. 
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
            \n \`${json.prefix}avatar\` + [\`@user\`] : This will give you your avatar, or the avatar of an other user if you tag it, and you can download it. \n \`${json.prefix}ping\` : This will give you the ping of the bot.`
        },
        {
            name: "\u200b",
            value: "**Soon _(alpha)_ commands :**"
        },
        {
            name: "This commands will be crash the bot or be nothing.",
            value: `\`${json.prefix}about\` : Informations about the bot and his creator.`
        },
<<<<<<< HEAD
        /* légende */ /*
=======
        /* légende */
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
        {
            name: '\u200b',
            value: '\u200b'
        },
        {
            name: "**Caption**",
            value: "[] = optional argument. \n () = not optional argument."
        }
<<<<<<< HEAD
    ], */
/* autres params */ /*
=======
    ],
    /* autres params */
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
    color: json.colorEmbed,
    footer: {
        text: `Bot created by : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }

};

exports.ENAVATARME = {
    title: "This is your avatar !",
<<<<<<< HEAD
    // .setURL(`${msg.author.displayAvatarURL()}`) */
/**
    description: "Click on the blue title text to open this image on your browser. So you can download it.", */
// image(msg.author.displayAvatarURL())
/* params */ /*
=======
    // .setURL(`${msg.author.displayAvatarURL()}`)
    description: "Click on the blue title text to open this image on your browser. So you can download it.",
    // image(msg.author.displayAvatarURL())
    /* params */
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
    color: json.colorEmbed,
    footer: {
        text: `Bot created by : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

exports.ENAVATARAUTHER = {
<<<<<<< HEAD
    */
// title: `This is the avatar of ${user.tag} !`
// url: `${user.displayAvatarURL()}`
/**
    description: "Click on the title text to open this image on your browser. So you can download it.", */
/* image: {
        url: user.displayAvatarURL()
    } */
/**
=======
    // title: `This is the avatar of ${user.tag} !`
    // url: `${user.displayAvatarURL()}`
    description: "Click on the title text to open this image on your browser. So you can download it.",
    /* image: {
        url: user.displayAvatarURL()
    } */
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
    color: json.colorEmbed,
    // params
    footer: {
        text: `Bot created by : ${json.author}`,
        icon_url: "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
    }
};

exports.ENEGDM = ":tada: Hey ! You have found the easter egg of the bot ! GG !";

exports.ENAVATARNOTUSER = `:crossed_swords: You don't use the corrects aguments. Please read this for more informations : \`${json.prefix}help\``;
<<<<<<< HEAD
*/
=======
>>>>>>> d696bbd6f5237205ce57d8a7b6865fa1c057b3f1
