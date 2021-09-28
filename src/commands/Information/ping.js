const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong; Test if the bot is working'),
    async execute(interaction) {
        await interaction.reply('Pong');
    },
};