const { MessageEmbed } = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "아바타",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "자신의 아바타만 볼수있습니다.",
  run: async (client, message, args) => {



    //OPTIONS FOR STATUS
const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${message.author.username}님의 프사`)
            .setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)

            
            

            


        
    
            
            
    
            
            
            message.channel.send(embed);
        }
    }
    
