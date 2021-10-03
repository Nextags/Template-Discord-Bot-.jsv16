////////////////////////////////////
//Dep Discord

const Discord = require("discord.js");
const fs = require("fs");
const bdd = require("./bdd.json");
const Client = new Discord.Client({

    intents: [

        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_BANS

    ]
});
////////////////////////////////////

//Handler
Client.commands = new Discord.Collection();
Client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(prefix)) return
    const command = Client.commands.get(commandName.slice(prefix.length))
    if (!command) return
    command.run(message, args, client)
})
////////////////////////////////////

//Token
Client.login("TOKEN");
////////////////////////////////////

//Bot Start
Client.on("ready", () => {
    console.log("Bot en Ligne")
    Client.user.setActivity("STATUS");
});
////////////////////////////////////

//Prefix
const prefix = "PREFIX";
////////////////////////////////////
