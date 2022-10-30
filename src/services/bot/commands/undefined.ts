import axios from 'axios'
import config from 'config'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class UndefinedCommandHandler implements CommandHandler {
  private readonly BOT_TOKEN = config.get<string>('telegram.bot.token')

  async handle(payload: TelegramUpdateMessage): Promise<void> {
    if (payload.message?.chat?.id) {
      await axios.post(
        `https://api.telegram.org/${this.BOT_TOKEN}/sendMessage`,
        {
          chat_id: payload.message.chat?.id,
          text: 'Я не знаю такой команды, разработчик ленивая *опа.',
        },
      )
    }
  }
}
