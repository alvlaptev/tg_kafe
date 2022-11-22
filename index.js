const token = '5613323159:AAFqsxDups7pFMWJBYEoSkhnVD8p9vX55xY'
const TelegramApi = require('node-telegram-bot-api')
const { board_nach } = require('./markups')
const { board_reg } = require('./markups')
const bot = new TelegramApi(token, {polling: true})
const connect_DB = require('./connect_DB')


const start = async () =>{
    await connect_DB
    bot.on('message', async (msg) => {
        try{
        const text = msg.text
        const chatId = msg.chat.id
        const nm = msg.chat.first_name
        await bot.sendSticker(chatId, 'https://chpic.su/_data/stickers/l/letovopros/letovopros_007.webp')
        await bot.sendMessage(chatId, 'Вас приветствует бот Verum' +
        '\nЧем займемся в первую очередь?', board_nach)
        }catch(e){
            console.log(e)
        }
    })

    bot.on('callback_query', async query =>{
        const {chat, message_id, text} = query.message
        try{
            switch (query.data){
                case 'akciya':
                    await bot.editMessageText('Поздравляем! \nВы зарегистрированы для участия в акции', {
                        chat_id: chat.id,
                        message_id: message_id,
                        reply_markup: board_reg.reply_markup,
                    })
                    break
    
            }
        }catch(e){
            console.log(e)
        }
   
    })


}


start()
