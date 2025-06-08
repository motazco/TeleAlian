const TelegramBot = require('node-telegram-bot-api');

// التوكن تبع البوت (لازم يكون شغال)
const bot = new TelegramBot("7908698906:AAG5vkilx0fonYfqrLzJ2SUDTiyK5lwcfcI", { polling: true });

// أمر /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋🏻 أهلاً وسهلاً في بوت عليّان! كيف أقدر أساعدك؟");
});

// أمر /test
bot.onText(/\/test/, (msg) => {
    bot.sendMessage(msg.chat.id, "✅ هذا رد تجريبي من أمر /test.");
});

// أمر /Alian
bot.onText(/\/Alian/, (msg) => {
    bot.sendMessage(msg.chat.id, "🛡️ هذا البوت من تطوير عليّان.\n© جميع الحقوق محفوظة.");
});

// رد تلقائي على أي رسالة مش أمر
bot.on("message", (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (!text.startsWith("/")) {
        bot.sendMessage(chatId, `📨 وصلتني رسالتك: "${text}"`);
    }
});
