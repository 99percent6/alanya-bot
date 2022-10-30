import axios from 'axios'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class UndefinedCommandHandler implements CommandHandler {
  async handle(payload: TelegramUpdateMessage): Promise<void> {
    if (payload.message?.chat?.id) {
      await axios.post(
        'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
        {
          chat_id: payload.message.chat?.id,
          text: 'Я не знаю такой команды, разработчик ленивая *опа.',
        },
      )
    }
  }
}
