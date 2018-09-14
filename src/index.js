import TelegramBot from 'node-telegram-bot-api';
import { CONFIG } from '../config/config';
import fs from 'fs';
import axios from 'axios';

const bot = new TelegramBot(CONFIG.TOKEN, { polling: true });

// bot.setWebHook(`${CONFIG.URL}/bot${CONFIG.TOKEN}`);

const options = {
    reply_markup: {
        resize_keyboard: true,
        keyboard: [
            [{ text: 'dmitry.dolgiy', callback_data: 'dmitry.daolgiy' }, {
                text: 'Do nothing',
                callback_data: 'Just data'
            }],
        ]
    }
};

// bot.on('message', ({ chat: { id } }) => {
//     bot.sendMessage(id, 'Выбери уже хоть что-нибудь:', options);
// });

bot.on('message', ({ text, chat: { id } }) => {
    axios.get(`https://www.instagram.com/web/search/topsearch/?context=blended&query=${text}&rank_token=0.7305849633342247&include_reel=false`)
        .then(res => {
            axios.get(`https://api.instagram.com/v1/users/${res.data.users[0].user.pk}/media/recent?access_token=297728826.1677ed0.2b33b56306b94a70b652eb923bf74538`)
                .then(({ data }) => {
                    const imageCollection = data.data
                        .map(({ images }) => ({ media: images.standard_resolution.url, type: 'photo' }));
                    const [one, two, ...rest] = imageCollection;
                    bot.sendMediaGroup(id, rest);
                });
        });
});
