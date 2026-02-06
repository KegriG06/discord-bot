const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  console.log(`Bot acildi: ${client.user.tag}`);

  const commands = [
    {
      name: "sa",
      description: "Selam verir"
    },
    {
      name: "hayirdir",
      description: "Hayırdır gardaş der, foto atar"
    }
  ];

  await client.application.commands.set(commands);
  console.log("Slash komutlar yüklendi");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "sa") {
    await interaction.reply("Selam! 👋");
  }

  if (interaction.commandName === "hayirdir") {
    await interaction.reply({
      content: "Hayırdır gardaş 😄",
      files: ["https://i.imgur.com/OL7H5f.png"]
    });
  }
});

client.login(process.env.TOKEN);
