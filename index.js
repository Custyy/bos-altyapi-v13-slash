const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const config = require('./config.js')
const { readdirSync } = require('fs')
const db = require('quick.db')
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
require('./util/eventLoader.js')(client)

global.db = db

client.commands = new Discord.Collection()

const files = readdirSync('./src')
var props;

for (var file in files) {
    props = require(`./src/${files[file]}`)
    client.commands.set(props.name, props)
    console.log(`[${moment().format('LLLL')}] ${props.name} komutu yüklendi.`)
}

const allFiles = client.commands.map(command => {
    return { name: command.name, description: command.description, options: command.options }
})

client.on('ready', async () => {
    client.application.commands.set(allFiles)
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand()) return;
    if (!client.commands.get(interaction.commandName)) return
    client.commands.get(interaction.commandName).run(client, interaction)
})

client.login(config.token)
