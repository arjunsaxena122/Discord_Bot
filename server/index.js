import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

dotenv.config({
  path: "./.env",
});

client.on("messageCreate",(message)=>{
  if(message.author.bot) return 

  if(message.content.startsWith("create")){
    const url = message.content.split(('create'))[1];
    return message.reply({
      content:"Generating a ShortID for " + url
    })
  }

  // console.log(message.content)
  // Every Detailed in this Message
  // console.log(message)

  message.reply("hi from Bot")

})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


client.login(process.env.BOT_TOKEN)