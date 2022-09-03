const Discord = require('discord.js')

module.exports = {
   name: 'ping',
   description: 'Botun pingini gösterir.',

   /*
      Seçenekleri incelemek için: https://discordjs.guide/interactions/slash-commands.html#registering-slash-commands
   */

   run: async (client, interaction) => {
      /**
       * 
       * @param {*} client 
       * @param {*} interaction 
      */
      interaction.reply(`\`🏓\` Latency is **${Date.now() - interaction.createdTimestamp}**ms!
\`💻\` API Latency is **${client.ws.ping}**ms!`)
   }
}