const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.discordapp.com/attachments/745998011318009858/746426840670928988/tenor.gif',
  'https://cdn.discordapp.com/attachments/745998011318009858/746426840670928988/tenor.gif',
  'https://cdn.discordapp.com/attachments/745998011318009858/746426840670928988/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor('#000000')
        .setDescription(`${message.author} deu um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Tich Tich Tich')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}