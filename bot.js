const keepAlive=require("./server")
const voice=require("@discordjs/voice")
const inspir=require('./inspire')
const bulli=require('./bully.js')
const cb=require('./chatbot.js')
const quote=require('./quotes.js')
require('dotenv').config();
const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const mySecret = process.env['TOKEN']

// const TOKEN=auth.json

const fs = require('node:fs');
const path = require('node:path');
bot.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`);
});
bot.on('messageCreate',msg=>{inspir.react(msg)})

bot.on("voiceStateUpdate", (oldVoiceState,newVoiceState) => {
  console.log("bully")
    bulli.bully(oldVoiceState,newVoiceState,bot)// Listeing to the voiceStateUpdate event
});

bot.on('messageCreate',msg=>{quote.sdquotes(msg)})

// bot.on('messageCreate',msg=>{cb.chat(msg)})

// Just add any case commands if you want to..
keepAlive();
bot.login(mySecret);


 

