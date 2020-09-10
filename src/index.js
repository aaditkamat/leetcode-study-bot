require('dotenv').config();
const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const createKeyboard = () => {
  return Markup.inlineKeyboard([
    Markup.urlButton(
      'Login to LeetCode',
      'https://leetcode.com/accounts/login'
    ),
  ]);
};

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    'Welcome to the LeetCode study bot. To get started, click on the Login button below',
    Extra.markup(createKeyboard())
  );
});

bot.launch();
