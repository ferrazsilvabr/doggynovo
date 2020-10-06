const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  let embed = new Discord.MessageEmbed()
  .setTitle("  **Minhas Informações**")
  .setDescription("Logo Abaixo Você Vera Minhas Informações Basicas. ")
  .setColor("RANDOM")
  .addField(" ❤️ Meus criadores"," ▸ <@!692414251247337592> // <@724037780723859507>") 
  .addField(" 📅 Dia que o bot foi criado", " ▸ 18/08/20")
  .addField(" 🛠️ Linguagem"," ▸ JavaScript ")
  .addField(" 🗜️ Meu prefixo"," ▸ d! ")
  .addField(" 🤖 Versão Do Bot"," 0.90 ")
  .addField(" 🤖  Discord De Suporte"," https://discord.gg/47Bu9JR " )
    message.channel.send(embed);
}

module.exports.info = {
  name: "botinfo",
  aliases: ["infobot"]
  }