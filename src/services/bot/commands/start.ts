import axios from 'axios'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'
import { User } from '../../../vendors/mongo'

export class StartCommandHandler implements CommandHandler {
  async handle(payload: TelegramUpdateMessage): Promise<void> {
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/setMyCommands',
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
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
      {
        chat_id: payload.message.chat.id,
        text: 'Привет! Этот бот позволит найти исчерпывающую информацию по переезду в Турцию. Больше информации в меню.',
      },
    )

    await User.insertOne(payload)
  }
}
