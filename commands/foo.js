const Discord = require("discord.js");
exports.run = (client, message, args) => {
    message.channel.send("bar");
}

module.exports.help = {
  name: "foo"
}