// set up variables
// require('dotenv').config();
const Discord = require('discord.js');
// const {prefix, token} = require('../utils/config.json');
var functions = require('./functions.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

// launches node server
client.once('ready', () => {
  console.log('Ready to go!');
});

// logs into server with token.
// TODO make token secret before git push or heroku
client.login(token);


// on can trigger multiple times
// receives every message in channel.
client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot){return;}

  // splits by space ' ' and does not error with multiple spaces.
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // handles all incoming events and passes to functions.js
  functions.eventHandler(args, command, message);
});
