import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription("This is the Greeting!");

export async function execute(interaction){
    await interaction.reply("General KenObi!")
}