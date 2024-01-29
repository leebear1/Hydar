const {ApplicationCommandOptionType} = require('discord.js');

module.exports = {
    data: {
        name: 'bigwin-pace',
        description: 'Bigwin Pace Calculator',
        options: [
          {
            name: 'games-played',
            description: 'Games Played',
            type: ApplicationCommandOptionType.Number,
            required: true,
          },
          {
            name: 'pd',
            description: 'PD',
            type: ApplicationCommandOptionType.Number,
            required: true
          }
        ]
      },
    run: ({interaction}) => {
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
}