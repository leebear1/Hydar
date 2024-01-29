const {SlashCommandBuilder} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription("Replies with ping"),
    run : ({interaction}) => {
        interaction.reply(`Pong!`);
    },
    devOnly: true,
};