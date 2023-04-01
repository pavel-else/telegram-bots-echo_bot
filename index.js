// t.me/PavelElseStepikEchoBot

const { Telegraf } = require('telegraf');

const bot = new Telegraf('6220570340:AAFWN5LpK3jQ_E8LgZjuNaxgjE6mRyx5R3I');

bot.use((ctx, next) => {
    // Любопытно, если не передать next в эту мидлварь, и не вызвать next() явно,
    // то управление все равно передет следующему обработчику.
    // Как это устроено ???
    next();
})

bot.use(async (ctx) => {
    // Свойство update это сообщение, которое прислал боту Telegram
    await ctx.reply(JSON.stringify(ctx.update, null, 2));
});
 
bot.launch().then((console.log('Started')));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Пример ctx.update
// {
//     "update_id": 927353825,
//     "message": {
//       "message_id": 2,
//       "from": {
//         "id": 400654960,
//         "is_bot": false,
//         "first_name": "Павел",
//         "last_name": "Дегтяренко",
//         "username": "pavel_else",
//         "language_code": "ru"
//       },
//       "chat": {
//         "id": 400654960,
//         "first_name": "Павел",
//         "last_name": "Дегтяренко",
//         "username": "pavel_else",
//         "type": "private"
//       },
//       "date": 1680305655,
//       "text": "ping"
//     }
//   }