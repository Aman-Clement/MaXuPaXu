
const keepAlive=require("./server")
const voice=require("@discordjs/voice")
const inspir=require('./inspire')
const bulli=require('./bully.js')
const cb=require('./chatbot.js')
const quote=require('./quotes.js')
require('dotenv').config();
const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const mySecret = process.env['TOKEN']
// const TOKEN=auth.json

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


 

