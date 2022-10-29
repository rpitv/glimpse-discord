const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js')

module.exports = {
    name: 'archive',
    async execute(interaction) {
        const selectMenu = new SelectMenuBuilder()
            .setCustomId('archiveSelection')
            .setPlaceholder('Select a category')
        const options = [];
        const categories = await interaction.guild.channels.cache.filter((category) => category.type === 4);
        for  (const category of categories) {
            const option = {
                label: category[1].name,
                value: category[0]
            }
            options.push(option)
        }
        selectMenu.setOptions(options);
        const row = new ActionRowBuilder()
            .addComponents(selectMenu);
        await interaction.reply({ components: [row], ephemeral: true });
    }
}