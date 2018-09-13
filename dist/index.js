'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _config = require('../config/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _nodeTelegramBotApi2.default(_config.CONFIG.TOKEN, { webHook: { port: _config.CONFIG.PORT } });

bot.setWebHook(_config.CONFIG.URL + '/bot' + _config.CONFIG.TOKEN);

bot.on('i', function (msg) {
    var id = msg.chat.id,
        _msg$from = msg.from,
        first_name = _msg$from.first_name,
        last_name = _msg$from.last_name;

    bot.sendMessage(id, 'https://s.tcdn.co/176/ee2/176ee215-2504-3415-913a-095c7db4b253/1.png');
});
var options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [[{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Хуево', callback_data: 'data 1' }], [{ text: 'Очень хуево', callback_data: 'data 2' }], [{ text: 'Крайне неутешительно', callback_data: 'data 3' }]]
    })
};

bot.on('message', function (msg) {
    bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});