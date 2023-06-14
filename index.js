import { Client, GatewayIntentBits, Partials } from "discord.js"
import 'dotenv/config'

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds
    ],
    partials: [
        Partials.Channel,
        Partials.Message
    ]
})

client.on('ready', (client) => {
    console.log(`Connected as ${client.user.tag}`);
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return
    message.channel.send("wawa")
})

client.login(process.env.TOKEN)
