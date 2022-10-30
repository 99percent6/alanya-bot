import axios from 'axios'
import config from 'config'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'

export class AccomodationCommandHandler implements CommandHandler {
  private readonly BOT_TOKEN = config.get<string>('telegram.bot.token')

  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      `https://api.telegram.org/${this.BOT_TOKEN}/sendMessage`,
      {
        chat_id: payload.message.chat.id,
        parse_mode: 'HTML',
        text: `<b>Местные сайты:</b>
Sahibinden - http://sahibinden.com\n
<b>Telegram каналы:</b>
В целом по Турции - https://t.me/turkarenda\n
В целом по Турции - https://t.me/arenda_turkey\n
В целом по Турции - https://t.me/estateturk\n
В целом по Турции - https://t.me/nedvizhkaturkish\n
Аланья - https://t.me/alania_arenda\n
Аланья - https://t.me/alanya_appart\n
Аланья - https://t.me/alaniya_arenda\n
Анталья/Аланья - https://t.me/nedvizhimost_alanya\n
Анталья - https://t.me/antaspanya_arenda\n
Анталья - https://t.me/antalya_arenda_prodazha\n
Кемер - https://t.me/kemerarenda\n
Фетхие - https://t.me/rentfethyie\n
Фетхие - https://t.me/drugayaturtsiya\n
Фетхие - https://t.me/fethiye_nedvizhimost_dinara\n
Газипаша - https://t.me/gazipasahome\n
Мерсин - https://t.me/mersin_housing\n
Мерсин - https://t.me/nedvizhimost_mersin\n
Измир - https://t.me/rent_turkey\n
Стамбул - https://t.me/arendaIstambul\n
Стамбул - https://t.me/stambyl_arenda\n
        `,
      },
    )
  }
}
