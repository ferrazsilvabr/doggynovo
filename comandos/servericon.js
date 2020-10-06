const Discord = require("discord.js")

exports.run = async(bot, message, args,)=> { 

        let icone = new Discord.MessageEmbed() 
        .setDescription(`**Clique [aqui](${message.guild.iconURL()}) para baixar o ícone do servidor!**`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 2048 })) // Aqui, colocamos dynamic: true, size: 2048, caso o servidor tenha um gif de icone e definimos o tamanho dela para 2048
        message.channel.send(icone)
}

exports.help = {
    name: 'servericon',
    aliases: ["icon"]
}