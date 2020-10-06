const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  ' https://i.pinimg.com/originals/c8/f2/d0/c8f2d028133a61addc5200cf48214574.gif ',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('**⚠️ • lembre-se de mencionar um usuário válido para socar!**');
}
/*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! ❤️`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**Lutinha dos deuses.**')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de socar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('socado')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}