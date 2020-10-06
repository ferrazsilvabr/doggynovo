const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.discordapp.com/attachments/745998011318009858/746426657996406804/6e6e53fb69d7b74286c9d2817e1fc3ca.gif',
  'https://cdn.discordapp.com/attachments/745998011318009858/746426657996406804/6e6e53fb69d7b74286c9d2817e1fc3ca.gif',
  'https://cdn.discordapp.com/attachments/745998011318009858/746426657996406804/6e6e53fb69d7b74286c9d2817e1fc3ca.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço')
        .setColor('#000000')
        .setDescription(`${message.author} abraça ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Abraço Bonito')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}