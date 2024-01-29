const {SlashCommandBuilder} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder().setName('crop').setDescription("Hydar tells you the best crop"),
    run : ({interaction}) => {
        interaction.reply('Hydar knows the best crop is cacti :D <:cacti:1106497136222285835>');
    },
};