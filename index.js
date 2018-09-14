'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var bot = new _nodeTelegramBotApi2.default('632046583:AAEOLvguRBd0sLgvbom4bfQuHqu0G9mHFew', { polling: true });

// bot.setWebHook(`${CONFIG.URL}/bot${CONFIG.TOKEN}`);

var options = {
    reply_markup: {
        resize_keyboard: true,
        keyboard: [[{ text: 'dmitry.dolgiy', callback_data: 'dmitry.daolgiy' }, {
            text: 'Do nothing',
            callback_data: 'Just data'
        }]]
    }
};

bot.on('message', function (_ref) {
    var id = _ref.chat.id;

    bot.sendMessage(id, 'Выбери уже хоть что-нибудь:', options);
});

bot.on('message', function (_ref2) {
    var text = _ref2.text,
        id = _ref2.chat.id;

    _axios2.default.get('https://www.instagram.com/web/search/topsearch/?context=blended&query=' + text + '&rank_token=0.7305849633342247&include_reel=false').then(function (res) {
        _axios2.default.get('https://api.instagram.com/v1/users/' + res.data.users[0].user.pk + '/media/recent?access_token=297728826.1677ed0.2b33b56306b94a70b652eb923bf74538').then(function (_ref3) {
            var data = _ref3.data;

            var imageCollection = data.data.map(function (_ref4) {
                var images = _ref4.images;
                return { media: images.standard_resolution.url, type: 'photo' };
            });

            var _imageCollection = _toArray(imageCollection),
                one = _imageCollection[0],
                two = _imageCollection[1],
                rest = _imageCollection.slice(2);

            bot.sendMediaGroup(id, rest);
        });
    });
});