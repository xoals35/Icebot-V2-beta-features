const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "돈받기",
    description: "Receive a daily award of money",

    async run (client, message, args) {
  
      
   
        let user = message.author;
        let amount = 100000000;


     


            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`${amount}돈이 지급되었습니다. `)
    }
}
