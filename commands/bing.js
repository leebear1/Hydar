const {SlashCommandBuilder} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder().setName('bing').setDescription("Bing"),
    run : ({interaction}) => {
        interaction.reply('https://tenor.com/view/bing-gif-25601964');
    },
};