module.exports = (client, msg, language) => {
    if (msg.author.bot) return;

    const args = msg.content.slice(client.PREFIX.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (client.commands.has(cmd)) client.commands.get(cmd)(client, msg, args, language);
};
