const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command","event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.on('ready', () => {
    client.user.setActivity(`테스트봇 | ${client.guilds.cache.size}개의 서버와 같이 운영중`)
})


client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = prefix;

    let profile = await leveling.Fetch(message.author.id);
    leveling.AddXp(message.author.id, 1);

    if(profile.xp + 0 > 150){
        leveling.AddLevel(message.author.id, 1);
        leveling.SetXp(message.author.id, 1)
        message.channel.send(`${message.author.username}님 축하합니다 레벨이${profile.level + 1}으(로)올랐습니다. 레벨업 해야하면 150경험치을 얻어야합니다.(150이 경험치 최대 경험치)`)
    }

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})























































client.login(token)
