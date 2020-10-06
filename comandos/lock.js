const Discord = require("discord.js")

exports.run = (client, message, args) => {

    if (!message.guild.me.hasPermission(["MANAGE_CHANNELS"])) return message.reply("**Eu não possuo a permissão.**");

  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(`:x: Error | Voce Nao Tem Permissao Para Executar Esse Comando`)
  
 if (message.member.hasPermission("MANAGE_CHANNELS")) {
        let guild = message.channel.id
        let everyone = message.guild.roles.cache.find(a => a.name === "@everyone")

        message.channel.overwritePermissions([
            {
                id: everyone.id,
                deny: ['SEND_MESSAGES'],
            },
        ]);
    message.channel.send(`** 🔒  | Canal Bloqueado com sucesso, para desbloquear use d!unlock**`)
}
 }