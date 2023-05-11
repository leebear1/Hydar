require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

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
    if (message.author.bot){
        return
    }

    if (message.content === 'ping'){
        message.reply('pong');
    }
});

client.on('messageCreate', (message) => {
    if (message.author.bot){
        return
    }

    if (message.content === 'meow'){
        message.reply('darn furries');
    }
});

client.on('messageCreate', (message) => {
    if (message.author.bot){
        return
    }

    if (message.content === 'hydar'){        
        message.react('<:hydar:1105768332566736916>')        
    }
});

client.login(process.env.wwww);
