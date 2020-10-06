const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  message.delete()
  if(!message.member.permissions.has("KICK_MEMBERS")) {
    return message.reply("⚠️ • Você não tem as permissões necessárias!")
  }
  
  if(!message.guild.me.permissions.has("KICK_MEMBERS")) {
    return message.reply(" ⚠️ • Eu não tenho a permissão necessária para poder executar essa ação!")
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("⚠️ • Você precisa mencionar alguem!")
  if(membro.user.id === message.author.id) {
    return message.reply(" ⚠️ • Você não pode se banir!")
  }
  if(membro.user.id === client.user.id) {
    return message.reply(" ⚠️ • Por que você quer me kickar?")
  }
  if(!membro.kickable) {
    return message.reply("⚠️ • Eu não posso kickar este membro!")
  }
  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("⚠️ • Eu não posso kickar este membro ele é um admnistrador")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"
  
  const embed = new Discord.MessageEmbed()
  .setTitle("⚠️ • Aviso - Kick")
  .setColor("#ff2848")
  .addField("👦 • Membro", membro.user.tag, false)
  .addField("🕴️ • Moderador", message.author.tag, false)
  .addField("📄 • Motivo", motivo, false)
  message.channel.send(embed)
  membro.kick({reason: motivo})
  
}