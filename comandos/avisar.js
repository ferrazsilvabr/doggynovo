const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sem permissão!") // Aqui definimos a permissão para utilizar o comando quem apenas tiver o cargo ADIMINSTRATOR.

    let membro = message.mentions.users.first() // Aqui definimos a váriavel "membros"
    if (!membro) return message.reply("mencione um membro!") // Aqui caso o autor da mensagem não mencionar uma pessoa, o bot irá avisar.

    let motivo = args.slice(1).join(" "); // Aqui definimos a váriavel "motivo".
    if (!motivo) return message.reply("escreva um motivo!") // Aqui depois autor da mensagem mencionar uma pessoa e não colocar um motivo, o bot irá avisar.

    let embed = new Discord.MessageEmbed() // Aqui vai ser a embed em que o bot irá mandar no chat.
    .setTitle(` ${membro.username} - VOCE FOI AVISADO `)
    .setColor('RANDOM')
    .setFooter(`Staff responsável: ${message.author.username}`, message.author.displayAvatarURL())
    .setDescription(motivo)

    membro.send(embed) // Aqui o bot irá mandar a embed no privado do membro que levou o aviso "warn".
    message.channel.send(`**😉 - aviso enviado com sucesso!**`) // Aqui vai ser a mensagem que o bot irá mandar no chat para o autor que executou o comando.
}

exports.help = {
    name: 'avisar',
    aliases: ['aviso']
}