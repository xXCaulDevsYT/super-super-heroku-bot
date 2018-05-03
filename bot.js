 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-bothelp') {
    	message.reply('**BTK Help:** -> `-botprefix` `-botinfo` `-subnazir`! ');
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

client.on('message', message => {
    if (message.content === 'Why did Nazir cross the road?') {
    	message.reply('To Win A Game Of Rules Of Survival!');
  	}
});
client.on('message', message => {
    if (message.content === '-jokes') {
    	message.reply('**Why did Nazir cross the road?** ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
