module.exports = {
    name: "청소",
    category: "관리 명령어",
    description: "원하는 양만큼의 메시지를 삭제합니다.",
    run: async (client, message, args) => {
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("어딜 권한도 없는 쪼꼬미가 ㅋ").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("청소 뒤에 지울 메시지의 양을 적어주세요.").then(m => m.delete(5000));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("봇한테 메시지 관리 권한이 없습니다").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true)
            .then(deleted => message.channel.send(` \`${deleted.size - 1}\` 개의 메시지를 삭제하였습니다.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}
