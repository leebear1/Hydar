module.exports = (interaction, commandObj) => {
    if (commandObj.devOnly) {
      if (interaction.member.id !== '515976649456746497') {
        interaction.reply('This command is for the developer only');
        return true;
      }
    }
  };