import axios from 'axios'
import config from 'config'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'
import { User } from '../../../vendors/mongo'

export class StartCommandHandler implements CommandHandler {
  private readonly BOT_TOKEN = config.get<string>('telegram.bot.token')

  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      `https://api.telegram.org/${this.BOT_TOKEN}/setMyCommands`,
      {
        commands: [
          {
            command: 'residencepermit',
            description: 'Получить инструкцию по оформлению ИКАМЕТа',
          },
          {
            command: 'closeddistricts',
            description: 'Получить ссылку со списком закрытых районов Турции',
          },
          {
            command: 'accomodation',
            description: 'Где искать жилье?',
          },
          {
            command: 'simcard',
            description: 'Где и как купить сим карту?',
          },
          {
            command: 'transfers',
            description: 'Как добраться из/в аэропорт?',
          },
          {
            command: 'moneytransfers',
            description: 'Как перевести деньги в Турцию?',
          },
          {
            command: 'bankaccount',
            description: 'Как открыть счет в Турции?',
          },
        ],
        scope: {
          type: 'chat',
          chat_id: payload.message.chat.id,
        },
      },
    )
    await axios.post(
      `https://api.telegram.org/${this.BOT_TOKEN}/sendMessage`,
      {
        chat_id: payload.message.chat.id,
        text: 'Привет! Этот бот позволит найти исчерпывающую информацию по переезду в Турцию. Больше информации в меню.',
      },
    )

    await User.insertOne(payload)
  }
}
