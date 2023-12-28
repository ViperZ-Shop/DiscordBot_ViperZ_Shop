module.exports = {
    name: "say",
    description: "Send Message",
    staff: true,

    run: (client, message, args) => {
        const content = message.content.slice(4).trim();
        const user = message.author;
        if(!content) return message.reply("**You must write something**")
        message.channel.send(content);
        console.log(`[+] ${user.username} say ${content} with the bot`)
        message.delete();
    }
}

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