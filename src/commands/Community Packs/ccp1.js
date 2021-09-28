const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ccp1')
        .setDescription('Community Commands Pack 1!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Find out what Community Commands Pack 1 is'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('hello')
                .setDescription('00 - Hello // Dragon'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('colorpicker')
                .setDescription('01 - Color Picker // Krymson'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('deadchat')
                .setDescription('02 - Dead Chat // Dragon')),
    async execute(interaction, client) {
        if (interaction.options.getSubcommand() === 'info') {
            const Info = new MessageEmbed()
                .setTitle(`Community Commands Pack (CCP) Info`)
                .setAuthor("PrestigeV13 CCP Info", client.user.displayAvatarURL(), 'https://forms.gle/dhj5xtzc74BHZLzs8')
                .setDescription("Hello there friend! Its nice to meet you. The Community Commands Pack or CCP is the collection of commands from several different communities and friends to give the bot more character. Usually a pack will release with 15-20 commands, but sometimes it will be more or less. You can suggest a pack by filling out the [google form](https://forms.gle/dhj5xtzc74BHZLzs8). Remember the basic rules of no NSFW or Offensive topics! You can suggest up to 4 commands per pack so think through your commands very carefully as you can't change them later! Your command will always show your name below it to signify it was your command. Every command will have there own number between 00 and the max number of commands accepted (usually between 15-20). A example of a command submitted would be: **00 - HI! // Dragon**. A full list of the commands will be released along with the public release of the commands themselfs. Have fun suggesting and good luck!\n\n**WARNING: DUPLICATE COMMANDS WILL BE INSTANTLY REJECTED!!**")
                .setColor('#3c692f')
            await interaction.reply({ embeds: [Info] });
        } else if (interaction.options.getSubcommand() === 'hello') {
            await interaction.reply(`Hello ${interaction.user.tag}`)
        } else if (interaction.options.getSubcommand() === 'colorpicker') {
            function generateHex() {
                let hexMath = Math.floor(Math.random() * 16777215);
                let randHex = hexMath.toString(16);
                return (randHex);
            }
            const hexEmbed = new MessageEmbed()
                .setAuthor("PrestigeV13 CCP 1", client.user.displayAvatarURL(), 'https://forms.gle/dhj5xtzc74BHZLzs8')
                .setDescription(`Your Hex Color Is: \`#${generateHex()}\`\n\nThe color on the left of this embed is a example of your color`)
                .setColor('#' + generateHex())
            await interaction.reply({ embeds: [hexEmbed] });
        } else if (interaction.options.getSubcommand() === 'deadchat') {
            array = [
                "https://tenor.com/view/dead-chat-favij-favij-dead-chat-gif-23007221",
                "https://tenor.com/view/pacman-gif-21447981",
                "https://tenor.com/view/dead-chat-dies-of-cringe-death-chat-dead-dead-chat-xd-gif-22440425",
                "https://tenor.com/view/dead-chat-xd-link-zelda-dead-chat-xd-gif-22990850",
                "https://tenor.com/view/googas-wet-wet-cat-dead-chat-dead-chat-xd-gif-20820186",
                "https://tenor.com/view/dead-chat-dead-group-chat-xyzw-discord-dead-chat-dead-chat-xd-gif-23093921",
                "https://tenor.com/view/rip-chat-chat-dead-dead-chat-inactive-gif-18754855",
                "https://tenor.com/view/dead-chat-xd-gif-22721657",
                "https://tenor.com/view/wtf-dead-chat-cringe-discord-cry-gif-20805838",
                "https://tenor.com/view/cat-discord-gif-dead-chat-dead-gif-22532488",
                "https://tenor.com/view/dead-chat-gif-21398098",
                "https://tenor.com/view/deadchat-killed-chat-chat-gif-14629272"
            ]
            var arrayN = 12;
            interaction.reply(array[Math.floor(Math.random() * arrayN)])
        }
    },
};