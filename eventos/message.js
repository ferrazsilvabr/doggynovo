module.exports = async (bot, message) => { //cuida do evento de mensagens enviadas em chat 
  if(message.author.bot)//se for msg privada ou de bot -> cai fora
    return; ///  || !message.guild

  if(!message.content.startsWith(bot.prefixo))//se a msg não inicia com o prefixo   
     return;//-> cai fora
  
  
  var arg_texto = message.content.slice(bot.prefixo.length); //remove o prefixo da msg
  var argumentos = arg_texto.trim().split(/ +/g); //divide a msg do comando
  var comando = argumentos.shift().toLowerCase(); //pega o comando, taca pra minúsculo
  
  var chat = message.channel;
  let remover = comando.length+1;
  arg_texto = arg_texto.slice(remover);
  
  switch(comando){
   case "help":
   case "comandos":
    comando = "ajuda"; break;
  }
  
  
  if(bot.pastas[comando] && bot.pastas[comando].includes("comandos")){
    
    /*if(!message.guild && !["ping", "litten", "eevee", "comandos", "ajuda", "raça", "r", "magia", "classes", "D&D"].includes(comando)){//se é mensagem privada, bloqueia se não for esses comandos
      return chat.send("Este comando não pode ser executado no privado!"); 
    }*/
    
    console.log(message.author.tag + '  ' + bot.prefixo + comando + ' ' + arg_texto);
    bot[comando](bot, message, argumentos, arg_texto, chat); //// client, mensagem, comando, argumentos, msg_str, chat, mlog, acesso
    
  }else{//Se não existe o comando, cai fora
    if(!message.guild){//se é mensagem privada
      return; //cai fora
    }
    
  }
}
