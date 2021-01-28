
const Discord = require('discord.js');

module.exports = {
    name: "상품",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`자동차 500코인 닌텐도 600코인 아이패드 100000코인 비행기 150000코인 철검 1500000코인`)
        .setTimestamp();

        message.channel.send(embed);
    }
}
