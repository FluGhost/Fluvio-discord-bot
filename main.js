const { Client, Collection, MessageEmbed } = require("discord.js");
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
    activity: { name: `type ${json.prefix}help for help.` },
    status: `online`
  });
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(json.prefix)) {
    const args = msg.content.slice(json.prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    // comment envoyer des DMs
    if (cmd === "test") {
      msg.author
        .createDM()
        .then(channel => {
          channel.send("test");
        })
        .catch(console.error);
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
          "Bot created by : FluGhost#7007",
          "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
        );
      msg.channel.send(pingEmbed);
    } else if (cmd === "help") {
      /* help */
      const helpEmbed = new MessageEmbed()
        .setTitle("Hey ! This is help for you !")
        .setDescription(
          "To use a command, please use the prefix + the command."
        )
        .addField(
          "Exemple :",
          `\`${json.prefix}help\` It's the prefix + \`help\`.`
        )
        .addField("__**Prefix**__ :", `${json.prefix}`)
        .addField("\u200b", "**Relase commands :**", false)
        .addField(
          `\`help\``,
          `This is the help message. And you are on this command.`
        )
        .addField(
          `\`avatar\` + [\`@user\`]`,
          `This will give you your avatar, or the avatar of an other user if you tag it, and you can download it.`
        )
        .addField(`\`ping\``, `This will give you the ping of the bot.`)
        .addField("\u200b", "**Alpha commands :**", false)
        .addField(
          "This commands will be crash the bot or be nothing.",
          "\u200b"
        )
        .addField("Nothing.", "\u200b")
        .addBlankField()
        .addField("**Caption**", "[] = optionnal argument.")
        .setColor(json.colorEmbed)
        .setFooter(
          "Bot created by : FluGhost#7007",
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
          .setFooter(
            "Bot created by : FluGhost#7007",
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
            .setFooter(
              "Bot created by : FluGhost#7007",
              "https://image.noelshack.com/fichiers/2019/50/5/1576262895-flughostlogo.png"
            );
          msg.channel.send(avatarAutherEmbed);
          if (user.tag === "FluGhost#7007") {
            // si le tag est moi-même
            msg.author.createDM().then(channel => {
              channel.send(
                "Hey ! You have found the easter egg of the bot !! GG !"
              );
            });
            console.log(`${msg.author.tag} a trouvé l'easter egg !!`);
            let numberNameJson = 0;
            let newEGFound = (`${numberNameJson}`, `${user.tag}`);
            let dataEG = JSON.stringify(newEGFound);
            fs.writeFileSync(`easterEgg.json`, dataEG);
          }
        } else {
          // Si il n'y a pas d'ID
          msg.reply(
            `You don't use the corrects aguments. Please read this for more informations : \`${json.prefix}help\``
          );
        }
      }
      /* vocal */
    } /* else if (cmd === "vocal") {
			if (args[0] === "add" || args[0] === "delete") {
				if (args[0] === "add") {
					const voiceChannelAdd = new Discord.GuildChannel()
						.type("voice")
						.clone();
				}
			} else {
				msg.reply("You must write an argument : `delete` or `add`.");
			}
		} */
  }
});

client.login(json.token);
