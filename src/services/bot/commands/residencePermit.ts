import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'
import { CommandHandler } from '../../../interfaces/commands'
import { TelegramUpdateMessage } from '../../../interfaces/telegram'
import { AppLogger } from '../../../libs'

export class ResidencePermitCommandHandler implements CommandHandler {
  private logger = new AppLogger('RESIDENCE PERMIT COMMAND: ')

  async handle(payload: TelegramUpdateMessage): Promise<void> {
    const file = fs.readFileSync('../../../assets/Turkey-residence-permit.pdf')
    const formData = new FormData()
    formData.append('chat_id', payload.message.chat.id)
    formData.append('document', file, 'residence-permit.pdf')
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendChatAction',
      {
        chat_id: payload.message.chat.id,
        action: 'upload_document',
      },
    )
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendMessage',
      {
        chat_id: payload.message.chat.id,
        text: 'Загружаю файл с инструкциями по оформлению ВНЖ, это может занять некоторое время...',
      },
    )
    this.logger.info('Uploading file \'Turkey-residence-permit.pdf\'...')
    await axios.post(
      'https://api.telegram.org/bot5564333546:AAG4DDyqfvnUSqf-yjeJjlfZdNQMhBl2q0U/sendDocument',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      },
    )
    this.logger.info('The file was uploaded.')
  }
}
