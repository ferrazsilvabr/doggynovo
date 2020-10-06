const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  message.delete()
  if(!message.member.permissions.has("BAN_MEMBERS")) {
    return message.reply("⚠️ • Você não tem a permissão necessária!")
  }
  
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
    return message.reply("⚠️ • Eu não tenho a permissão necessária!")
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("⚠️ • Você precisa mencionar alguem!")
  if(membro.user.id === message.author.id) {
    return message.reply("⚠️ • Você não pode se banir!")
  }
  if(membro.user.id === client.user.id) {
    return message.reply("⚠️ • Por que você quer me banir?")
  }
  if(!membro.bannable) {
    return message.reply("⚠️ • Eu não posso banir este membro!")
  }
  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("⚠️ • Eu não posso banir este membro ele é um admnistrador")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"
  
  const embed = new Discord.MessageEmbed()
  .setTitle("⚠️ • Aviso - Banimento")
 
  .setColor("#ff2848")
  .addField("👦 • Membro", membro.user.tag, false)
  .addField("🕴️ • Moderador", message.author.tag, false)
  .addField("📄 • Motivo", motivo, false)
  message.channel.send(embed)
  membro.ban({reason: motivo})
  
}