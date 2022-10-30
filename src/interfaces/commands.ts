import { TelegramUpdateMessage } from './telegram'

export interface CommandHandler {
  handle(payload: TelegramUpdateMessage): Promise<void>
}
