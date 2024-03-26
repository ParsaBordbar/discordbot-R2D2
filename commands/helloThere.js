import { SlashCommandBuilder } from 'discord.js';
import * as helloThere from "./helloThere";

export const data = new SlashCommandBuilder()
    .setName("HelloThere!")
    .setDescription("This the Greeting!");

async function execute(interaction){
    await interaction.reply("General KenObi!")
}