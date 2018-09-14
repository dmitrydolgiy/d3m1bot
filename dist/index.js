'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _config = require('../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _nodeTelegramBotApi2.default(_config.CONFIG.TOKEN, { polling: true });

// bot.setWebHook(`${CONFIG.URL}/bot${CONFIG.TOKEN}`);

var options = {
    reply_markup: {
        inline_keyboard: [[{ text: 'Хуево', callback_data: 'data 1' }, { text: 'Takoe', callback_data: 'data 1' }], [{ text: 'Очень хуево', callback_data: 'data 2' }], [{ text: 'Крайне неутешительно', callback_data: 'data 3' }]]
    }
};

bot.on('message', function (_ref) {
    var id = _ref.chat.id;

    bot.sendMessage(id, 'Выбери уже хоть что-нибудь:', options);
});

bot.on('callback_query', function (query) {
    console.log(JSON.stringify(query));
    bot.answerCallbackQuery(query.id, JSON.stringify(query, null, 4)).catch(function (msg) {
        return bot.sendSticker(msg.id, 'https://s.tcdn.co/4f6/11b/4f611b70-8750-3da1-ac75-bdea6dc88a9b/12.png');
    });
});