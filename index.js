// set up variables
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

// launches node server
client.once('ready', () => {
  console.log('Ready to go!');
});

// logs into server with token.
// TODO make token secret before git push or heroku
client.login(config.token);


// on can trigger multiple times
// receives every message in channel.
client.on('message', message => {
  // console.log(message.content);
  if(message.content === "!hello"){
    message.channel.send('Hello human.')
  }
})
