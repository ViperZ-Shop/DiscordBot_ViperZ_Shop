// Request \\
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 3276799 });
const config = require("./config.json");
const fs = require("fs")

// Ready \\
client.on('ready', async ( client ) => {
    console.log(`[+] ${client.user.username} 🟢 Connected 🟢`)
    console.log(`[+] Loading Commands...`)
    console.log(`[+] Commands 🟢 Connected 🟢`)
});

// Handlers \\
client.commands = new Collection()
const archives = fs.readdirSync("./commands").filter((f) => f.endsWith(".js"))
for(arx of archives) {
    const archive = require("./commands/" + arx)
    client.commands.set(archive.name, archive)
}

// Commands \\
client.on("messageCreate", async message => {
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    const user = message.mentions.users.first() || message.author;

    if (cmd) {
        if (cmd.staff) {
            if (message.member.roles.cache.has(config.staff)) {
                cmd.run(client, message, args);
                console.log(`[+] ${command}.js Executed by ${user.username}`)
            } else {
                console.log(`[+] ${command}.js Locked for ${user.username}`)
                message.reply("**You don't have permission to use this command**").then(msg => {
                    message.delete();
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });
            }
        } else {
            cmd.run(client, message, args);
        }
    }
});

// Welcome \\
client.on('guildMemberAdd', async member => {
    const welcomeChannelId = config.welcome_channel_id; // Replace with the CHANNEL ID you want to assign \\
    const serverName = member.guild.name;
    const welcomeMessage = `Welcome to **${serverName}** ${member.user.toString()}`;
    console.log(`[+] ${member.user.tag} joined the server.`)
  
    const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);
    if (welcomeChannel) {
      welcomeChannel.send(welcomeMessage);
    }
});

// Goodbye \\
client.on('guildMemberRemove', async member => {
    client.channels.resolve(config.bye_channel_id).send("**The user <@" + member.user.id +"> left the server.**"); // Replace with the CHANNEL ID you want to assign \\
    console.log(`[+] ${member.user.tag} left the server.`)
});

// AutoRol \\
client.on('guildMemberAdd', member => {
    const roleID = config.default_role; // Replace with the ROLE ID you want to assign \\
  
    const role = member.guild.roles.cache.get(roleID);
  
    if (role) {
      member.roles.add(role)
        .then(() => {
          console.log(`[+] The role was been assigned to ${member.user.tag}`);
        })
        .catch(console.error);
    } else {
      console.log(`[+] The role with ID ${roleID} was not found.`);
    }
});

// Connect \\
client.login(config.token)

//  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # \\
//  #                                                                                                     # \\
//  #            ██╗   ██╗██╗██████╗ ███████╗██████╗  ███████╗   ██████╗██╗  ██╗ █████╗ ██████╗           # \\
//  #            ██║   ██║██║██╔══██╗██╔════╝██╔══██╗ ╚════██║  ██╔════╝██║  ██║██╔══██╗██╔══██╗          # \\
//  #            ╚██╗ ██╔╝██║██████╔╝█████╗  ██████╔╝   ███╔═╝  ╚█████╗ ███████║██║  ██║██████╔╝          # \\
//  #             ╚████╔╝ ██║██╔═══╝ ██╔══╝  ██╔══██╗ ██╔══╝     ╚═══██╗██╔══██║██║  ██║██╔═══╝           # \\
//  #              ╚██╔╝  ██║██║     ███████╗██║  ██║ ███████╗  ██████╔╝██║  ██║╚█████╔╝██║               # \\
//  #               ╚═╝   ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝ ╚══════╝  ╚═════╝ ╚═╝  ╚═╝ ╚════╝ ╚═╝               # \\
//  #                                                                                                     # \\
//  #                           DISCORD: https://discord.gg/ViperZ                                        # \\
//  #                           OWNERS: Winhn & Owni                                                      # \\
//  # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # \\
