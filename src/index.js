import TelegramBot from 'node-telegram-bot-api';
import { CONFIG } from '../config/config';

const bot = new TelegramBot(CONFIG.TOKEN, { webHook: { port: CONFIG.PORT } });

bot.setWebHook(`${CONFIG.URL}/bot${CONFIG.TOKEN}`);

bot.on('i', msg => {
    const { chat: { id }, from: { first_name, last_name } } = msg;
    bot.sendMessage(id, 'https://s.tcdn.co/176/ee2/176ee215-2504-3415-913a-095c7db4b253/1.png');
});
const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Хуево', callback_data: 'data 1' }],
            [{ text: 'Очень хуево', callback_data: 'data 2' }],
            [{ text: 'Крайне неутешительно', callback_data: 'data 3' }]
        ]
    })
};

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});