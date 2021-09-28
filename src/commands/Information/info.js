const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Finds info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription('Get user information')
                .addUserOption(option => option.setName("target").setDescription('The user mentioned')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Get server information')),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s Information`)
                    .setAuthor("PrestigeV13 User Info", client.user.displayAvatarURL())
                    .setThumbnail(user.displayAvatarURL())
                    .addFields(
                        { name: `Username:`, value: `${user.username}`, inline: true },
                        { name: `Client ID:`, value: `${user.username}`, inline: true },
                        { name: `Creation Date:`, value: `${user.createdAt}`, inline: true },
                    )
                await interaction.reply({ embeds: [userEmbed] });
            } else {
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username}'s Information`)
                    .setAuthor("PrestigeV13 User Info", client.user.displayAvatarURL())
                    .setThumbnail(interaction.user.displayAvatarURL())
                    .addFields(
                        { name: `Username:`, value: `${interaction.user.username}`, inline: true },
                        { name: `Client ID:`, value: `${interaction.user.username}`, inline: true },
                        { name: `Creation Date:`, value: `${interaction.user.createdAt}`, inline: true },
                    )
                await interaction.reply({ embeds: [userEmbed] });
            }
        } else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`**Server Name:** ${interaction.guild.name}\n**Total Member Count:** ${interaction.guild.memberCount}`)
        }
    },
};