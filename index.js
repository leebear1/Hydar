require('dotenv').config();
const { Client, IntentsBitField, REST, Routes } = require('discord.js');
const mongoose = require('mongoose');
const { CommandHandler } = require('djs-commander')
const path = require('path');
//const keep_alive = require('./keep_alive.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildEmojisAndStickers,
  ],
})


new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  mdoelsPath: path.join(__dirname, 'models'),
  utilsPath: path.join(__dirname, 'utils'),
  validationsPath: path.join(__dirname, 'validations'),
  testServer: '1104325275463979049'
});




(async() =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    client.login(process.env.TOKEN);
    
  } catch (error){
    console.log('Error: #{error}');
  }
})();

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  }

  if (message.content === 'meow') {
    message.reply('darn furries');
  }

  if (message.content.toLowerCase() === 'bing') {
    message.reply('chilling 🥶🥶🥶');
  }

  if (message.content.toLowerCase() === 'hydar') {
    message.react('<:hydar:1105768332566736916>')
  }

  if (message.content.toLowerCase() === 'silly') {
    message.react('<:silly:1201329675214004264>')
  }
});