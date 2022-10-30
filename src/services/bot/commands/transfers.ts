import axios from 'axios'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class TransfersCommandHandler implements CommandHandler {
  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
      {
        chat_id: payload.message.chat.id,
        text: `1. https://gettransfer.com/ru\n2. https://kiwitaxi.ru/turkey - можно наличными на месте\n3. https://www.724transfer.com/Home?language=ru - можно наличными на месте\n4. https://www.bizimtransfer.com/Home - можно наличными на месте
        `,
      },
    )
  }
}
