const { Client, Collection } = require("discord.js");
const client = new Client({ disableEveryone: true });
client.commands = new Collection();
const json = require("./config.json");

const language = `${json.language}`;

client.PREFIX = json.prefix;

client.commands = new Collection();
client.commands.set("about", require("./commands/about.js"));
client.commands.set("avatar", require("./commands/avatar.js"));
client.commands.set("help", require("./commands/help.js"));
client.commands.set("ping", require("./commands/ping.js"));
client.commands.set("test", require("./commands/test.js"));
client.commands.set("achievement", require("./commands/achievement.js"));
client.commands.set("chocolate", require("./commands/chocolate.js"));
client.commands.set("invite", require("./commands/invite.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg, language));

client.login(json.token);
