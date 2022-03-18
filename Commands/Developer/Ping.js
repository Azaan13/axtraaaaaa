const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "a rather normal/simple ping-pong command",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: "pong"})
    }
}