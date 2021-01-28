
  
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : '핑',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
       message.channel.send(`현재 봇의 응답핑:${client.ws.ping}ms`)

    }
}
