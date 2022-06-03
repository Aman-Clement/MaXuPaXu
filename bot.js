
const keepAlive=require("server")
require('dotenv').config();
const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const axios=require("axios")
// const TOKEN=auth.json

const targets=['sad','unhappy','angry','hopeless','miserable','guilt']


// bot.on('ready', () => {
  //         logger.info('Connected');
//         logger.info('Logged in as: ');
//         logger.info(bot.username + ' - (' + bot.id + ')');
// });

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`);
});

function inspire(msg,foundword){
  axios.get('https://type.fit/api/quotes')
  .then(response =>{
    const randomquote=response.data[Math.floor(Math.random() * response.data.length)];
    msg.reply(`dont be ${foundword}\n${randomquote.author} once said:\n${randomquote.text}`)
  });
}


bot.on('messageCreate',msg=>{
  if(msg.author.bot)
  return
  const foundword=targets.find((target) => msg.content.toLowerCase().includes(target))
  if(foundword){
    console.log(`found the word ${foundword}`);
    inspire(msg,foundword)
  }
  if(msg.content.toLowerCase().includes("$inspire")){
    inspire(msg,foundword)
  }
  if(msg.content.toLowerCase() == "Hello"){
    msg.reply("Wassup?");
  }
  
  keepAlive();
  bot.login("TOKEN");
})
// Just add any case commands if you want to..



