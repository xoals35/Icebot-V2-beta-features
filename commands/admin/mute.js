module.exports = {
  name: "뮤트",
  description: "Mute a member from your server",

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("어딜 권한도 없는 쪼꼬미가 ㅋ");

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!user) message.channel.send(`**${message.author.tag}**님이 언급한 사람이 서버에 없습니다...`);

    if (user.id === message.author.id) return message.channel.send(`**${message.author.tag}**님 자신은 뮤트 할수없어요 ㅠ `);

    let role = message.guild.roles.cache.find(x => x.name === "Muted");

    if (!role) return message.channel.send("**Muted**라는 역할을 찾을수 없습니다 빨리 생성해 주고 채널 설정 하고 다시 명령어를 쳐주세요!");

    let reason = args.slice(1).join(" ");
    if (reason === null) reason = "사유 없음"

    user.roles.add(role);

    await message.channel.send(`${user}님이 이런 사유로 뮤트되었습니다.: ${reason}`)

    user.send(`${message.author.tag}님 다음과 같은 이유로 ${message.guild.name}에서 뮤트를 먹으셨습니다 ㅠㅠ 사유: ${reason}`);
  }
}
