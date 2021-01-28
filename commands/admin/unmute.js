module.exports = {
    name: "언뮤트",
    description: "Unmute a member from your server",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("어딜 권한도 없는 쪼꼬미가 ㅋ");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let role = message.guild.roles.cache.find(x => x.name === "Muted");

        if(user.roles.cache.has(role)) return message.channel.send(`{message.author.tag}님이 언급한 사람은 언뮤트 되지 않았습니다...`);

        user.roles.remove(role);

        message.channel.send(`${user}님이 언급한 사람이 뮤트에서 풀려났어요!`)
    }
}
