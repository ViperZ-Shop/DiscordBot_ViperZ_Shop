module.exports = {
    name: "clear",
    description: "Delete a number of messages",
    staff: true,

    run: (client, message, args) => {
        const amount = args[0]
        const user = message.author;

        if(!amount) return message.reply("**You must write the number of messages you want to delete**").then(msg => {
            message.delete();
            setTimeout(() => {
                msg.delete();
            }, 4000);
        });

        if(isNaN(amount)) return message.reply("**The value has to be a number!**").then(msg => {
            message.delete();
            setTimeout(() => {
                msg.delete();
            }, 3000);
        });

        if(amount >= 100) return message.reply("**It can't be more than 100 messages!**").then(msg => {
            message.delete();
            setTimeout(() => {
                msg.delete();
            }, 3000);
        });
        
        if(amount <= 1) return message.reply("**The number cannot be smaller than 1!**").then(msg => {
            message.delete();
            setTimeout(() => {
                msg.delete();
            }, 3000);
        });

        message.delete().then(q => {
         message.channel.bulkDelete(amount);
         console.log(`[+] Have been deleted ${amount} messages by ${user.username}`)
        })
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