module.exports = {
    name: "avatar",
    title: "Get a User Avatar",
    user: true,
    
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        const embad = {
            title: `**Avatar of ${user.username}**`,
            image: {url: user.displayAvatarURL({ dynamic: true, size: 1024 })}
        };
        try { 
            const reply = await message.reply({embeds: [embad]});
            message.delete();
        } catch (error) {
            console.error("Error sending or deleting messages:", error);
        }
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