module.exports = {
    name: "server",
    title: "Get the Server Avatar",
    user: true,
    
    run: async (client, message, args) => {
    const embad = {
        title: `**Server Avatar**`,
        image: {url: message.guild.iconURL({ dynamic: true, size: 1024 })}
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