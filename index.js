const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  console.log(`Bot acildi: ${client.user.tag}`);

  await client.application.commands.set([
    { name: "sa", description: "Selam verir" },
    { name: "hayirdir", description: "Hayırdır gardaş der, foto atar" }
  ]);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "sa") {
    await interaction.reply("Selam! 👋");
  }

  if (interaction.commandName === "hayirdir") {
    const embed = new EmbedBuilder()
      .setDescription("Hayırdır gardaş 😄")
      .setImage("https://i.imgur.com/OL7H5f.png"); // DİREKT RESİM

    await interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
