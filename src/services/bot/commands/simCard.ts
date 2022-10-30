import axios from 'axios'
import config from 'config'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class SimCardCommandHandler implements CommandHandler {
  private readonly BOT_TOKEN = config.get<string>('telegram.bot.token')

  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      `https://api.telegram.org/${this.BOT_TOKEN}/sendMessage`,
      {
        chat_id: payload.message.chat.id,
        text: `
          Всё просто, приходи в офис Turk Telecom или Turkcell, там попроси оформить туристическую сим карту, понадобится только заграничный паспорт. Стоимость постоянно изменяется, поэтому лучше уточняй на месте. Ориентировочно 300 - 400 турецких лир за сим карту с пакетом из 20ГБ интернета. Сим карта действует 90 дней, но её можно продлить после получения ИКАМЕТ в офисе компании.
        `,
      },
    )
  }
}
