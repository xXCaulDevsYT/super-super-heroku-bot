const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-bothelp') {
    	message.reply('**BTK Help:** -> ');
  	}
});

client.on('message', message => {
    if (message.content === '-botprefix') {
    	message.reply('Prefix For BTK Clan Is: ( - )');
  	}
});

client.on('message', message => {
    if (message.content === '-botinfo') {
    	message.reply('Creator: xXCaulDevsYT#7314 , http://youtube.com/emeraldassasinplayz');
  	}
});

client.on('message', message => {
    if (message.content === '-subnazir') {
    	message.reply('https://www.youtube.com/channel/UCUOjDEjAJAEYLVMpUrMxlIQ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
