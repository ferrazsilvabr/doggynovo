const Discord = require(`discord.js`);

    
module.exports = {
  name: "ajuda",
  description: "Use para ver minha aba de ajuda",
  category: "informações",
  usage: "ajuda",
  run: async (client, message, member, args) => {
    
        let embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`**⚠️ • Central de Ajuda.**`)
        .setImage(`https://cdn.discordapp.com/attachments/745378642863063091/762758874494533662/Sem_titulo1.png`)
        .setDescription (`** __ Olá, essa é minha central de ajuda__**
        

**👮 • MODERAÇÃO

🎉 • DIVERSÃO

⚙️ • COMANDOS CONFIGURAVEIS

🔁 • OUTROS**`) 
        .addField("ME ADICIONE", "[Clique Aqui](https://discord.com/oauth2/authorize?=&client_id=745063153557176340&scope=bot&permissions=8)")
        
        message.channel.send(message.author, embed).then(msg => { //quando enviar a mensagem...
            msg.react(`⬅️`).then(() => { //quando reagir o primeiro emoji...
            msg.react(`👮`);
            msg.react(`🎉`);
            msg.react(`🔁`);
            msg.react(`⚙️`);
              
      
            })


            const mod = msg.createReactionCollector((reaction, user) =>  reaction.emoji.name ==  `👮`  &&  user.id  == message.author.id, )
            const diversao = msg.createReactionCollector((reaction, user) =>  reaction.emoji.name  ==  `🎉`  &&  user.id  == message.author.id,)
            const outros = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🔁` && user.id == message.author.id, )
            const configs = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⚙️` && user.id == message.author.id,)
            const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⬅️` && user.id == message.author.id, )
              mod.on(`collect`, r =>{  //quando coletar

                let embed_two = new Discord.MessageEmbed()
                .setColor(`GOLD`)
                .setTitle(`Central De Ajusa - Moderação`)
                .setDescription(`Seja Bem-Vindo(a) a central de comandos - moderação.`)
                .setImage(`https://cdn.discordapp.com/attachments/745378642863063091/762758874494533662/Sem_titulo1.png`)
                .addField("**BAN**", "**`d!ban <@USER> <MOTIVO>`**")
                .addField("**UNBAN**","**`Utilize d!unban <@id>`**")
                .addField("**KICK**", "**`d!kick <@USER> <MOTIVO>`**")
                .addField("**LOCK**", "**`d!lock NO CANAL QUE VOCE DESEJA BLOQUEAR`**")
                .addField("**UNLOCK**", "**`d!unlock NO CANAL QUE VOCE DESEJA DESBLOQUEAR`**")
                .addField("**DAR CARGO.**", "`d!darcargo <@user> <@cargo>`")
                .addField("**REMOVER CARGO**","**`Utilize d!rcargo <@user> <@cargo>`**")
                .addField("**CLEAR**", "**`d!clear <QUANTIDADE ENTRE 1-99>`**")
                .addField("**AVISAR**", "**`d!avisar <@USER> <MESSAGE>`**")
                .addField("**ANUNCIAR**", "**`d!anunciar é faça um anúncio.`**")
                .addField ("**ENQUETE**" , "**` Utilize d! enquete para CRIAR Uma enquete`** ")
                msg.edit(embed_two)
        r.users.remove(message.author.id)
                        //isso irá remover as reações de quem chamou o comando
            })
          
          diversao.on(`collect`, r =>{ 
            let embed_two = new Discord.MessageEmbed()
                .setColor(`GOLD`)
                .setTitle(`Centro De Comandos - Diversão`)
                .setDescription(`Seja Bem-Vindo(a) a central de comandos - Diversão.`)
                .setImage(`https://cdn.discordapp.com/attachments/745378642863063091/762758874494533662/Sem_titulo1.png`)
                .addField("**SOCO**", "**`d!soco <@USER>`**")
                .addField("**SHIPPAR**","**`Utilize d!shippar <@user> <@iser²>`**")
                .addField("**BEIJAR**", "**`d!beijar <@USER> `**")
                .addField("**ROLETARUSSA**", "**`d!roletarussa`**")
                .addField("**COIN**", "**`d!coin <CARA/COROA>`**")
                .addField("**VIDENTE**","**`Utilize d!vidente ( O que queira saber)`**")
                .addField("**DADO**", "**`d!dado EM QUALQUER CANAL`**")
                .addField("**JOGO**", "**`d!jogo <PEDRA/PAPEL/TESOURA>`**")
                .addField("**TAPA**", "**`d!tapa <@USER>`** ")
             
                .addField("**MORDER**","**`Utilize d!morder <@user>`**")
                .addField("**ABRAÇAR**", "**`d!abraçar <@USER>`**")
                .addField("**GADO**" , " **` Utilizar / d! gado para Medir Seu Nível gado.` **")
                .addField("**PIADA**" , "**` Utilize d! piada para o Doggy Falar Uma piada.` **") 
                .addField("**ATACAR**" , "**` Utilize d! atacar para atacar alguém` **.")
          
                msg.edit(embed_two)
                r.users.remove(message.author.id) // isso irá remover como reações de quem chamou o comand)}o)
          
         
            
            
         outros.on(`collect`, r =>{ 
               let embed_two = new Discord.MessageEmbed()
                .setColor(`GOLD`)
                .setTitle(`Centro De Comandos - Outros`)
                .setDescription(`Seja Bem-Vindo(a) a central de comendos - Outros.`)
                .setImage(`https://cdn.discordapp.com/attachments/745378642863063091/762758874494533662/Sem_titulo1.png`)
                .addField("**TICKET**", "**`TICKET ABRE UM TICKET`**") 
                .addField("**SERVERICON**", "**`d!servericon  VER O PERFIL DO SERVIDOR`**")       
                .addField("**AVATAR**", "**`d!AVATAR <@USER>`**")     
                .addField("**SERVERINFO**", "**`d!serverinfo PARA SABER AS INFORMAÇÕES DO SERVIDOR QUE EXECUTOU O COMANDO`**")    
                .addField("**BOTINFO**", "**`d!BOTINFO PARA SABER AS INFORMAÇÕES BASICA DO BOT`**")
                .addField("**PING**","**`Utilize d!ping para ver seu ping`**")
                .addField("**SAY**","**`Utilize d!say para enviar uma mensagem em algum canal.`**")
                .addField("**SMS**","**`Utilize d!sms <@user> <mensagem>`**")
               msg.edit(embed_two)
       r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comand)}o)
        
         configs.on(`collect`, r =>{
            let embed_two = new Discord.MessageEmbed()
            .setColor(`GOLD`)
            .setTitle(`Seja Bem Vindo(a) central de Comandos - Configuraveis`)
            .setDescription(`Comandos Configuraveis Abaixo`)
            .setImage(`https://cdn.discordapp.com/attachments/745378642863063091/762758874494533662/Sem_titulo1.png`)
            .addField("**Ant-Links**","**`Utilize d!anti on/off para está proibindo envio de link.`**")
            .addField("**Mensagens de bem vindo.**","**`d! setentranda <canal>`**")
            .addField("**Mensagens de saida**","**`d!setsaida <canal>`**")
            .addField("**Sistema de SMS**","**`d!sms on//off // d!sms <@user> <mensagem>`**")
            msg.edit(embed_two)
             r.users.remove(message.author.id)
            

            })

           voltar.on(`collect`, r =>{ //quando coletar
         let embed_three = new Discord.MessageEmbed()
        .setColor(`GOLD`)
        .setTitle(`Centro De Comando Doggy`)
        .setImage(`https://cdn.discordapp.com/attachments/745378642863063091/762758874494533662/Sem_titulo1.png`)
        .setDescription(`Olá,Esse E Meu Centro De Comandos.


👮 • MODERAÇAO

🎉 • DIVERSAO

⚙️ •  COMANDOS CONFIGURAVEIS

🔁 •  OUTROS`)
        msg.edit(embed_three)
        r.users.remove(message.author.id) //isso irá remover as reações de quem chamou o comando
            
           })
         })
          })
        })
  }}