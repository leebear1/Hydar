require('dotenv').config();
const { Client, IntentsBitField, REST, Routes } = require('discord.js');

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

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'crop') {
    return interaction.reply('Hydar knows the best crop is cacti :D <:cacti:1106497136222285835>');
  }

  if (interaction.commandName === 'bing') {
    return interaction.reply('https://tenor.com/view/bing-gif-25601964');
  }

  if (interaction.commandName === 'time') {
    const currentDate = new Date();
    interaction.reply(`The time is ${currentDate.toLocaleString()}`);
  }
  
  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The sum is ${num1 + num2}`);
  }
  if (interaction.commandName === 'calculate-games-played') {
    const num1 = interaction.options.get('games-played').value;
    const num2 = interaction.options.get('pd').value;
    const num3 = num2 / num1

    function roundNum(number){
      return +(Math.round(number + "e+2") + "e-2");
   }
    const n49 = roundNum(num3*49)
    const n50 = roundNum(num3*50)
    const n51 = roundNum(num3*51)
    const n52 = roundNum(num3*52)

    interaction.reply(`49: ${n49}\n50: ${n50}\n51: ${n51}\n52: ${n52}`);
  }
});

client.login(process.env.TOKEN);
