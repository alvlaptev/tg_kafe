
module.exports = {

    board_nach: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Учавствовать в акции', callback_data: 'action'}],
                [{text: 'Актуальное меню', callback_data: 'menu'}],
                // [{text: 'Поиграть', callback_data: 'game'}],
                // [{text: 'Получить скидку', callback_data: 'skidka'}]

            ]
        })
    },

    board_reg: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Актуальное меню', callback_data: 'menu'}]
            ]
        })
    }


}