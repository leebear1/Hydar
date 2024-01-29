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