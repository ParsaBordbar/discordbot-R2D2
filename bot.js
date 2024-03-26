import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import * as helloThere from "./commands/helloThere.js";

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function greet(){
    console.log('Hello There! 👋' + client.user.tag);
}

async function handelInteraction(interaction) {
    if (!interaction.isCommand()) return;
    if(interaction.commandName === 'hello'){
        await helloThere.execute(interaction);
    }
}

client.once(Events.ClientReady, greet); //client.one for an event that can happen once
client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handelInteraction); //client.on for an event that can happen multiple times