import axios from 'axios'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class ClosedDistrictsCommandHandler implements CommandHandler {
  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
      {
        chat_id: payload.message.chat.id,
        text: 'Ссылка на официальный сайт правительства Турции - https://www.goc.gov.tr/mahalle-kapatma-duyurusu-hk2',
      },
    )
  }
}
