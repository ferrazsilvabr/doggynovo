const Discord = require('discord.js')
exports.run = async (bot, message, args) => {

  let channel = message.guild.channels

    const user = message.author.id;
    const name = "ticket-" + user;

    if (message.guild.channels.cache.find(ch => ch.name == name)) {
        message.channel.send("Você já criou um ticket!")
    } else {
        message.guild.channels.create(name).then((chan) => {
            chan.updateOverwrite(message.guild.roles.everyone, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            })
            chan.updateOverwrite(user, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true
            })
            message.channel.send(`**${message.author}** Ticket criado!`);

            chan.send("Ticket criado!").then((m) => {

              let embed = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setTitle(`FECHE O TICKET`)
                .setDescription(`**PARA FECHAR O TICKET REAJA ABAIXO!**`)
               
                chan.send(message.author, embed).then(msg => {
        msg.react(`✅`).then(() => {
        })

         const acabar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `✅` && user.id == message.author.id)

              acabar.on(`collect`, r => { 
                 chan.delete()
              })

                })
            })
        })
    }
    
}