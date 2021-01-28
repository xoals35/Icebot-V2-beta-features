const Discord = require('discord.js');

module.exports = {
    name: "밴",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('어딜 권한도 없는 쪼꼬미가 ㅋ')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('어딜 권한도 없는 쪼꼬미까 ㅋㅋ')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('밴할 사람을 지정하세요!');

        if(!member) return message.channel.send(`${message.author.tag}님이 지정한 사람을 찾을수 없습니다. 죄송합니다.`);
        if(!member.bannable) return message.channel.send('밴하려고 했던 사람은 밴할수 없습니다. 왜냐면 당신보다 계급이 높습니다.');

        if(member.id === message.author.id) return message.channel.send(`${message.author.tag}님 자신을 뮤트할수없어요`);

        let banReason = args.slice(1).join(" ");

        if(!banReason) banReason = '사유없음';

        member.ban({ reason: banReason })
        .catch(err => {
            if(err) return message.channel.send('문제가 발생했어요!')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('밴 로그')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('밴이 된 사용자:', member)
        .addField('킥한 사람', message.author)
        .addField('사유', reason)
        .setFooter('킥 된 시간', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}
