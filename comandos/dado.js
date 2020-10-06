exports.run = async (client, message, args) => {
  let dado = Math.floor(Math.random() * 6) + 1;

  message.channel.send(`${message.author} jogou um dado e caiu em ${dado}!`);
};
