import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function greet(){
    console.log('Hello There! 👋' + client.user.tag);
}

client.once(Events.ClientReady, greet);
client.login(process.env.TOKEN);