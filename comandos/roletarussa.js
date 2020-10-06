const Discord = require("discord.js")
exports.run = async(client, message, args,)=> {

//são as palavras que podem aparecer.
let replies = ["Você morreu!", "Você sobreviveu!", "Você levou um tiro de raspão!", "Você Saiu Sem Nenhum Arranhao!"]
        
let result = Math.floor((Math.random() * replies.length));  //vai aleatorizar os replies

//vai criar uma mensagem em embed para enviar o resultado
let dadoembed = new Discord.MessageEmbed()
.setFooter(message.author.tag, message.author.displayAvatarURL)
.setThumbnail(message.author.avatarURL)
.setColor('#5F04B4') //escolha uma cor 
.addField("O que será que aconteceu?", replies[result]) //vai puxar o resultado o let result

message.channel.send(dadoembed); 
}