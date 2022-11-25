const token = '5613323159:AAFqsxDups7pFMWJBYEoSkhnVD8p9vX55xY'
const TelegramApi = require('node-telegram-bot-api')
const { board_nach } = require('./markups')
const { board_reg } = require('./markups')
const User = require("./userModel");
const bot = new TelegramApi(token, {polling: true})
const connect_DB = require('./connect_DB')


const start = async () =>{
    await connect_DB

    await bot.setMyCommands([
        {command: '/start', description: 'Приветствие!'},
        {command: '/info', description: 'Информация о пользователе'}
    ])
    bot.on('message', async (msg) => {
        try{
        const text = msg.text
        const chatId = msg.chat.id
        const nm = msg.chat.first_name
        if (text === '/start'){
            const [user, created] = await User.findOrCreate({
                where: {user_id: chatId, name: nm},
            });
            console.log(created)
                await bot.sendSticker(chatId, 'https://chpic.su/_data/stickers/l/letovopros/letovopros_007.webp')
                await bot.sendMessage(chatId, 'Вас приветствует бот Verum' +
                '\nЧем займемся в первую очередь?', board_nach)  
        }            
        if (text === '/info'){
            const user = await User.findByPk(chatId)
            if(user.action === true){
                await bot.sendMessage(chatId, `Данные:  ${user.name},  id_telegram: ${chatId}
                \nУчавствует в акции`)
            }else{
                await bot.sendMessage(chatId, `Данные:  ${user.name},  id_telegram: ${chatId}
                \nНе учавствует в акции`)

            }
        }
     
        }catch(e){
            console.log(e)
        }
    })

    bot.on('callback_query', async query =>{
        const {chat, message_id, text} = query.message
        try{
            switch (query.data){
                case 'action':
                    await User.update({action: true}, {where: {user_id: chat.id}})
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
