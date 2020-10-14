function addPlusBeetweenElements(element){
    let finish;
    for (let index = 0; index < element.length; index++) {
        if (finish){
            finish = `${finish}+${element[index]}`;
        } else {
            finish = `${element[index]}`;
        }
    }
    return finish;
}

module.exports = (client, msg, args) => {
    if (args.length === 0){
        msg.reply("Veuillez mettre des aruments svp.");
    } else {
        let arguments = msg.content.split(',');
        let zero_argument = arguments[0].split(' ');
        let block = Number(zero_argument[1]) - 1;

        let yellow_title = arguments[1].split(' ');
        const title = addPlusBeetweenElements(yellow_title);

        let white_text = arguments[2].split(' ');
        const text = addPlusBeetweenElements(white_text);

        const url = `https://minecraftskinstealer.com/achievement/${block}/${title}/${text}`;

        msg.channel.send(url);
    }
};
