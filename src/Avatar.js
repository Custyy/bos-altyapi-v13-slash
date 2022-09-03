const Discord = require('discord.js')

module.exports = {
   name: 'avatar',
   description: 'Avatarına göz atmaya ne dersin.',
   options: [
      {
         name: 'user',
         description: 'Avatarını görmek istediğin kullanıcıyı etiketle.',
         type: 'USER',
         required: false
      }
   ],
   run: async (client, interaction) => {
      const user = interaction.options.getUser('user') || interaction.user
      const avatar = user.displayAvatarURL({ dynamic: true, size: 4096 })
      const embed = new Discord.MessageEmbed()
         .setColor('#5865F2')
         .setTitle(`${user.username} adlı kullanıcının avatarı:`)
         .setImage(avatar)
      interaction.reply({ embeds: [embed] })
   }
}