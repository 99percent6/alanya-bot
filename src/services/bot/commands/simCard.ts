import axios from 'axios'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class SimCardCommandHandler implements CommandHandler {
  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
      {
        chat_id: payload.message.chat.id,
        text: `
          Всё просто, приходи в офис Turk Telecom или Turkcell, там попроси оформить туристическую сим карту, понадобится только заграничный паспорт. Стоимость постоянно изменяется, поэтому лучше уточняй на месте. Ориентировочно 300 - 400 турецких лир за сим карту с пакетом из 20ГБ интернета. Сим карта действует 90 дней, но её можно продлить после получения ИКАМЕТ в офисе компании.
        `,
      },
    )
  }
}
