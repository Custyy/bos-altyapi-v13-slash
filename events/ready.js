const Discord = require('discord.js')

module.exports = (client) => {
  client.user.setActivity(`🎁 (change me from events"/ready.js")`, { type: 'PLAYING', url: 'https://twitch.tv/ryper_1' })
  console.log(`${client.user.username} Aktif! (${client.guilds.cache.size} Sunucu - ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı)`)
}
