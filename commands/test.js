module.exports = (client, msg) => {
    if (msg.author.tag = json.author){
        msg.reply(":gift: ok !");
        msg.delete();
        console.log(`${msg.author.tag} à exécuté la commande test.`);
    }
};