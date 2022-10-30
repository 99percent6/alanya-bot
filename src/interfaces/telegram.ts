export type Command = 'start' | 'residencepermit' | 'closeddistricts' | 'accomodation' | 'simcard' | 'transfers' | 'bankaccount' | 'moneytransfers'

export interface TelegramUpdateMessage {
  update_id: number
  message: {
    message_id: number
    from: {
      id: number
      is_bot: boolean
      first_name: string
      last_name: string
      username: string
      language_code: string
    },
    chat: {
      id: number
      first_name: string
      last_name: string
      username: string
      type: string
    },
    date: number
    text: Command
    entities: {
      offset: number
      length: number
      type: string
    }[]
  }
}
