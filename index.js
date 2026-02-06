const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  console.log(`Bot acildi: ${client.user.tag}`);

  // Slash komutlari kaydet
  const commands = [
    {
      name: "sa",
      description: "Selam verir"
    },
    {
      name: "hayirdir",
      description: "Hayirdir gardas der ve resim atar"
    }
  ];

  await client.application.commands.set(commands);
  console.log("Slash komutlar yuklendi");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  // /sa
  if (interaction.commandName === "sa") {
    await interaction.reply("Selam! 👋");
  }

  // /hayirdir
  if (interaction.commandName === "hayirdir") {
    const embed = new EmbedBuilder()
      .setDescription("Hayırdır gardaş 😄")
      .setImage("https://i.imgur.com/OL7H5f.png"); // DİREKT RESİM LINKİ

    await interaction.reply({
      embeds: [embed]
    });
  }
});

// Railway'de TOKEN Settings > Variables icinde
client.login(process.env.TOKEN);
