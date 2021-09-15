const Discord = require('discord.js');
const { token } = require('./config.json');
const { words } = require('./words.json');
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client();

client.once('ready', () =>{
    console.log('BOT IS READY')
    client.user.setPresence({
        status:"online"
    })
    client.user.setActivity('Badwords !', {
        type:"LISTENING"
    })
});

client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    // You Can Add More/Less Words In Words.json
    if(message.content = words) {
        message.delete({timeout:1})
        const embedm = new MessageEmbed()
        .setColor('#DC143C')
        .setTimestamp()
        .setTitle('**Chat Admin Bot**')
        .setDescription('**You Are Using Black Listed Words !**')
        .setFooter('Do Not Use Badwords ')
        message.channel.send('<@'+`${message.author.id}`+'>')
        message.channel.send(embedm)
    }
});

// Change Token Value To Your Token Here Or In Config.json
client.login(token)