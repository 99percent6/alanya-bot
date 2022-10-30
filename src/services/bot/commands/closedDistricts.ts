import axios from 'axios'
import config from 'config'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class ClosedDistrictsCommandHandler implements CommandHandler {
  private readonly BOT_TOKEN = config.get<string>('telegram.bot.token')

  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      `https://api.telegram.org/${this.BOT_TOKEN}/sendMessage`,
      {
        chat_id: payload.message.chat.id,
        text: 'Ссылка на официальный сайт правительства Турции - https://www.goc.gov.tr/mahalle-kapatma-duyurusu-hk2',
      },
    )
  }
}
