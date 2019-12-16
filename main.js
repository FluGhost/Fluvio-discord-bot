const { Client, Collection, MessageEmbed /* , GuildChannel */ } = require("discord.js");
const client = new Client({ disableEveryone: true });
client.commands = new Collection();
const json = require("./config.json");
const fs = require("fs");

/* obtenir un utilisteur depuis une mention */
function getUserFromMention(mention) {
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches) return;
    const id = matches[1];
    return client.users.get(id);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // joue à ...
    client.user.setPresence({
        game: { name: `type ${json.prefix}help for help.` },
        status: `online`
    });
});

client.on("message", msg => {
    // let easterEgg = 0;
    if (msg.author.bot) return;
    if (msg.content.startsWith(json.prefix)) {
        const args = msg.content.slice(json.prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        // comment envoyer des DMs
        if (cmd === "test") {
            msg.reply(":eggplant:");
            msg.delete();
            console.log(`${msg.author.tag} à exécuté la commande test.`);
        }

        /* ping */
        if (cmd === "ping") {
            const pingEmbed = new MessageEmbed()
                .setTitle("Pong !")
                .setDescription(`Took : ${Math.round(client.ping)} ms.`)
                .setColor(json.colorEmbed)
                .setFooter(
                    `Bot created by : ${json.author}`,
                    "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
                );
            msg.channel.send(pingEmbed);
        } else if (cmd === "help") {
        /* help */
            const helpEmbed = new MessageEmbed()
                .setTitle("Hey ! This is help for you !")
                .setDescription(
                    `~~Type \`${json.prefix}about\` for informations about the bot.~~ _(soon...)_`
                )
                .addField(
                    "\u200b",
                    `__Exemple :__ \n \`${json.prefix}help\` It's the prefix + \`help\`. \n
           	        __**Prefix**__ : \`${json.prefix}\` \n
                    :pushpin: **Relase commands :** 
                    \n \`${json.prefix}help\` : This is the help message. And you are on this command. 
                    \n \`${json.prefix}avatar\` + [\`@user\`] : This will give you your avatar, or the avatar of an other user if you tag it, and you can download it. \n \`${json.prefix}ping\` : This will give you the ping of the bot.`
                )
                .addField("\u200b", "**Soon _(alpha)_ commands :**")
                .addField(
                    "This commands will be crash the bot or be nothing.",
                    `\`${json.prefix}about\` : Informations about the bot and his creator.`
                )
                /* légende */
                .addBlankField()
                .addField(
                    "**Caption**",
                    "[] = optional argument. \n () = not optional argument."
                )
                /* autres params */
                .setColor(json.colorEmbed)
                .setFooter(
                    `Bot created by : ${json.author}`,
                    "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
                );

            msg.channel.send(helpEmbed);
        } else if (cmd === "avatar") {
            // Si c'est la commande avatar
            if (args.length === 0) {
                // Si il n'y a pas d'arguments on donne l'avatar de l'auteur du message
                const avatarMeEmbed = new MessageEmbed()
                    .setTitle("This is your avatar !")
                    .setURL(`${msg.author.displayAvatarURL()}`)
                    .setDescription(
                        "Click on the title text to open this image on your browser. So you can download it."
                    )
                    .setImage(msg.author.displayAvatarURL())
                    .setColor(json.colorEmbed)
                    /* params */
                    .setFooter(
                        `Bot created by : ${json.author}`,
                        "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
                    );
                msg.channel.send(avatarMeEmbed);
            } else {
            // Si il y a des arguments
                const user = getUserFromMention(args[0]); // On récupère l'ID
                if (user) {
                // Si il y a un ID
                    const avatarAutherEmbed = new MessageEmbed()
                        .setTitle(`This is the avatar of ${user.tag} !`)
                        .setURL(`${user.displayAvatarURL()}`)
                        .setDescription(
                            "Click on the title text to open this image on your browser. So you can download it."
                        )
                        .setImage(user.displayAvatarURL())
                        .setColor(json.colorEmbed)
                        // params
                        .setFooter(
                            `Bot created by : ${json.author}`,
                            "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
                        );
                    msg.channel.send(avatarAutherEmbed);
                    if (user.tag === "FluGhost#7007") {
                        // si le tag est moi-même
                        msg.author.createDM().then(channel => {
                            channel.send("Hey ! You have found the easter egg !! GG !");
                        });
                        // console
                        console.log(`${msg.author.tag} a trouvé l'easter egg !!`);
                        // écrire dans le JSON le nom de la personne qui a trouvé l'EG
                        let newEGFound = { easterEgg$eg: [msg.author.tag] };
                        // envoyer newEGFound dans le JSON
                        let dataEG = JSON.stringify(newEGFound);
                        fs.writeFile(`easterEgg.json`, dataEG);

                    // eg += 1;
                    }
                } else {
                // Si il n'y a pas d'ID
                    msg.reply(
                        `You don't use the corrects aguments. Please read this for more informations : \`${json.prefix}help\``
                    );
                }
            }
        /* vocal */
        } else if (cmd === "vocal") {
            if (args[0] === "add" || args[0] === "delete") {
                if (args[0] === "add") {
                    /* const voiceChannelAdd = new GuildChannel()
                        .type("voice")
                        .clone(); */
                } else {
                }
            } else {
                msg.reply("You must write an argument : `delete` or `add`.");
            }
        // about command
        } else if (cmd === "about") {
            const aboutMessage = new MessageEmbed()
                .setTitle("__**About us.**__")
                .setDescription("Hey, my name is Fluvio, I'm a cool bot !")
                .addField("\u200b", `My author is ${json.author} \n My version is \`${json.version}\` \n My languages are : \n . 1. English \n .  2. _soon..._ \n`)
                .addField("\u200b", `And yes, my source code is public and on GitHub [at this address](https://github.com/FluGhost/Fluvio-discord-bot)`)
                // config
                .setColor(json.colorEmbed)
                .setFooter(
                    `Bot created by : ${json.author}`,
                    "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
                );
            // et on l'envoie
            msg.channel.send(aboutMessage);
        }
    }
});

client.login(json.token);
