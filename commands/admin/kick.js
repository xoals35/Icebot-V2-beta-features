const discord = require("discord.js");

module.exports = {
  name: "킥",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, 이 명령을 사용할 수있는 권한이 없습니다.`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, 이 명령을 사용할 수있는 권한이 없습니다.`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, 차고 싶은 사람을 말 해주세요`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, 너 자신을 걷어 차지 못해`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, 금지 이유를 알려주세요`)
  }
    
    let embed = new discord.MessageEmbed()
    .setTitle("액션 : 킥")
    .setDescription(`금지 ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`금지 ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    
    
    
  }
}
