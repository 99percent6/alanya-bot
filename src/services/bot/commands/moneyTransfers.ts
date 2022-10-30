import axios from 'axios'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class MoneyTransfersCommandHandler implements CommandHandler {
  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
      {
        chat_id: payload.message.chat.id,
        text: 'Мой разработчик написал небольшую статью по возможным сопосбам перевода денег, вот она - https://telegra.ph/Kak-perevesti-dengi-v-Turciyu-10-16',
      },
    )
  }
}
