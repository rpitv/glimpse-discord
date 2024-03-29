const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js')
const { db } = require('../firebase');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Sets up the bot')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) { 
        // const setupRef = db.collection('rpi-tv').doc('setup')
        // const setupData = await setupRef.get()
        // let proCategory, proChannel;
        // if (setupData.data()) {
        //     proCategory = setupData.data().proCategory;
        //     proChannel = setupData.data().proChannel;
        // };
        //
        // const checkFields = async (embed) => {
        //     if (proChannel)
        //         embed.data.fields[0] = { name: '1️⃣ Productions Channel', value: `<#${proChannel}>` }
        //     if (proCategory) {
        //         const category = await interaction.guild.channels.cache.find((category) => category.id === proCategory);
        //         embed.data.fields[1] = { name: '2️⃣ Productions Category', value: category.name }
        //     }
        // }
        //
        // const setupEmbed = new EmbedBuilder()
        //     .setColor('Red')
        //     .setTitle('Setup Dashboard')
        //     .setDescription('Basic overview of the setup for this server')
        //     .setFooter({ text: 'Click on a button to setup'})
        //     .addFields(
        //         {name: '1️⃣ Productions Channel', value: `DNE`},
        //         {name: '2️⃣ Productions Category', value: `DNE`},
        //     );
        // checkFields(setupEmbed);
        //
        // const setupRow = new ActionRowBuilder()
        //     .addComponents(
        //         new ButtonBuilder()
        //             .setCustomId('proChannel')
        //             .setLabel('1️⃣')
        //             .setStyle(ButtonStyle.Primary),
        //         new ButtonBuilder()
        //             .setCustomId('proCategory')
        //             .setLabel('2️⃣')
        //             .setStyle(ButtonStyle.Primary)
        //     );
        //
        // interaction.reply({ embeds: [setupEmbed], components: [setupRow] });
        interaction.reply({
            content: "WHY ARE U RUNNING THIS COMMAND",
            ephemeral: true,
        })
    }
}