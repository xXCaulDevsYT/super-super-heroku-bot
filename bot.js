const Discord = require('discord.js');
const client = new Discord.Client();



//Some other configuration stuff
const WelcomeChannelName = "w-g";
const White = "FFFFFF";
const creator = "xXCaulDevsYT#7314";
const programmer = "FunnyHackz&ModzYT#3804";
const prefix = "-";
const token = "NDQxNDIxNzQ1NzY2MDA2ODA1.DcwF5A.xb-qlGxqORQwFyfD1_nTFFdEAOQ";
//End of configuration

let jokes = ["**Why did Nazir cross the road?**", "**Nazir is Da Wae**"];
let jokeoutput = Math.floor(Math.random() * jokes.length);

client.on('ready', () => {
	console.log("Username : " + client.user.username);
	console.log("Prefix   : " + prefix);
});


client.on("guildMemberAdd", member => {
	let WelcomeChannel = member.guild.channels.find("name", WelcomeChannelName);
	let embed = new Discord.RichEmbed()
	.setTitle("Welcome")
	.setColor(White)
	.setDescription(`Welcome ${member.user.username} to the official Discord of the BTK Clan!`)
	WelcomeChannel.send(embed);

})

client.on('message', message => {
	if(message.channel.type === "dm") return;
	if(message.author.id === client.user.id) return;
	
	if(!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    let messageArray = message.content.split(" ");
	let cmd = messageArray[0];

	if (command === "bothelp") {
		message.channel.send("**BTK Help:** -> `-botprefix` `-botinfo` `-subnazir`! ");
	}

    if (command === "botprefix") {
		message.channel.send(`Prefix For BTK Clan Is: ( ${prefix} )`);
	}

	if (command === "jokes") {
		
		message.channel.send(jokes[jokeoutput]);
	}

	if (command === "botinfo") {
		let embed = new Discord.RichEmbed()
		.setTitle("BotInfo")
		.setColor("FFFFFF")
		.addField("Username", client.user.username)
		.addField("ID", client.user.id)
		.addField("Users", client.users.size)
		.addField("Guilds", client.guilds.size)
		.addField("Developer", creator)
		.addField("Programmer", programmer)
	    .addField("Developer YT Link", "http://youtube.com/emeraldassasinplayz");
		message.channel.send(embed);
	}

	if(command === "subnazir") {
		let nazir = "https://www.youtube.com/channel/UCUOjDEjAJAEYLVMpUrMxlIQ"; 
		let embed = new Discord.RichEmbed()
		.setTitle("Nazir")
		.setColor("FFFFFF")
		.setDescription(`[Click Me](${nazir})`);
		message.channel.send(embed);
	}
});

client.on('message', message => {
    if (message.content === 'Why did Nazir cross the road?') {
    	message.reply('To Win A Game Of Rules Of Survival!');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// client.login(token);
