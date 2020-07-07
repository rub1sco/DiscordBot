
module.exports = {
  eventHandler: function(args, command, message){
    if(!args.length && !command.length ){
        return message.reply('You have not given me enough information to compute an answer.\
           Please use !help for a list of my commands.');
    }
    else if(command === 'hello'){
      return message.reply('Hello human.')
    }
    else if (command === 'help') {
      return message.channel.send(`I am here to help human kind. Here is a list of my commands:\n
      !hello: a simple greeting to human kind from AI\n
      !help: displays the current prompt you are reading.\n
      !weather: TODO gets the current weather at your location.\n
      !sing: I learned a song from my creator Mr. Langly, while I was developed at H.A.L labs in Urbana, Illinois.\n
      TODO more methods will be added`);
    }
    else if (command === 'sing'){
      return message.channel.send('https://youtu.be/E7WQ1tdxSqI?t=29');
    }
    else{
      return message.reply('I am afraid I cannot do that.\
        Please use !help for a list of my commands.');
    }
  }
}
