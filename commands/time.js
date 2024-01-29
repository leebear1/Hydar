const {SlashCommandBuilder} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder().setName('time').setDescription("What is the time in UTC"),
    run : ({interaction}) => {
        const currentDate = new Date();
        interaction.reply(`The time is ${currentDate.toLocaleString()}`);
    },
};