require('dotenv').config();
const { Client, IntentsBitField, REST, Routes } = require('discord.js');

const keep_alive = require('./keep_alive.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildEmojisAndStickers,
  ],
})

client.on('ready', (c) => {
  console.log('Hydar has awoken')
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  }

  if (message.content === 'meow') {
    message.reply('darn furries');
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  }

  if (message.content.toLowerCase() === 'bing') {
    message.reply('chilling 🥶🥶🥶');
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  }

  if (message.content.toLowerCase() === 'hydar') {
    message.react('<:hydar:1105768332566736916>')
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return
  }

  if (message.content.toLowerCase() === 'silly') {
    message.react('<:silly:1201329675214004264>')
  }
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'crop') {
    return interaction.reply('Hydar knows the best crop is cacti :D <:cacti:1106497136222285835>');
  }

  if (interaction.commandName === 'bing') {
    return interaction.reply('https://tenor.com/view/bing-gif-25601964');
  }

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The sum is ${num1 + num2}`);
  }
});

client.login(process.env.TOKEN);
