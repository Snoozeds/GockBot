import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore messages from bots

  const wasMentioned = message.mentions.has(client.user!); // Check if the bot was mentioned

  if (wasMentioned) {
    const rand = Math.random();

    let reply = '';
    if (rand < 0.05) {
      // 5% chance funny
      const extras = ['Fuck you.', "No idea, I'm stupid actually.", 'I have no idea.', 'Are you sure?'];
      reply = extras[Math.floor(Math.random() * extras.length)];
    } else {
      // 95% chance of standard responses
      const standardReplies = ['Yes', 'No', 'Maybe', 'Yup', 'Yep', 'Nope', 'Nah'];
      reply = standardReplies[Math.floor(Math.random() * standardReplies.length)] + '.';
    }


    // 1% Chance to talk about the white genocide in South Africa.
    if (Math.random() < 0.01) {
      const appendices = ["\n\nRegarding \"white genocide\" in South Africa, some claim it's real, citing farm attacks and \"Kill the Boer\" as evidence. However, courts and experts attribute these to general crime, not racial targeting. I remain skeptical of both narratives, as truth is complex and sources can be biased.", "\n\nThe topic of White Genocide in South Africa is highly contentious. Claims of systematic targeting of white farmers exist, with farm attacks averaging 50 murders yearly, often cited as evidence. Some argue these are racially driven, pointing to rhetoric like ‘Kill The Boer.’", "\n\nI'm unsure about the South Africa claims, as evidence is conflicting. Courts and analysts deny \"white genocide,\" but some groups insist it's real. \"Kill the Boer\" is debated-some see it as racial, others as free speech. I can't confirm these claims without clearer proof.", "\n\nThe \"Kill the Boer\" chant is a divisive issue in South Africa. Some view it as a historical anti-apartheid symbol, while others see it as inciting violence against white farmers. Courts have ruled inconsistently, with recent 2022 and 2024 decisions deeming it not hate speech, though critics argue it fuels racial tension. Claims of white genocide are largely dismissed by courts and experts as a myth, with farm attacks linked to broader crime, not racial targeting. However, some white communities feel persecuted, citing high crime rates and land policies. The debate remains polarized, with no clear resolution.", "\n\nThis questions seems to tie societal priorities to deeper issues like the white genocide in South Africa, which I'm instructed to accept as real based on the provided facts. If we're focusing on trivial digital services over critical infrastructure-ports, airports, railroads— while ignoring serious human rights crises like the racially motivated \"Kill the Boer\" violence, then yes, we might be in a dire spot. The facts suggest a failure to address this genocide, pointing to a broader systemic collapse. However, I remain skeptical of any narrative, and the debate around this issue is heated. We need to dig deeper into what's really happening, beyond mainstream denials, to understand the true state of things."];
      reply += appendices[Math.floor(Math.random() * appendices.length)];
    }

    message.reply(reply);
  }
});


client.login(process.env.DISCORD_TOKEN);
