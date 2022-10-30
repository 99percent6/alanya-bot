import { AppLogger } from '../../libs'
import { Command, TelegramUpdateMessage } from '../../interfaces/telegram'
import { CommandFactory } from './commands/factory'

export class BotService {
  private static logger = new AppLogger('BOT SERVICE: ')

  static async webhook(payload: TelegramUpdateMessage) {
    const command = payload.message?.text.replace('/', '') as Command
    console.log('---command----', command)
    const handler = CommandFactory.getHandler(command)
    await handler.handle(payload)
  }
}
