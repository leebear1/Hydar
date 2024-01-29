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
  validationsPath: path.join(__dirname, 'validations'),
  testServer: '1104325275463979049'
});


(async() =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

  } catch (error){
    console.log('Error: #{error}');
  }
})();

client.login(process.env.TOKEN);