import { CommandHandler } from '../../../interfaces/commands'
import { Command } from '../../../interfaces/telegram'
import { StartCommandHandler } from './start'
import { ResidencePermitCommandHandler } from './residencePermit'
import { ClosedDistrictsCommandHandler } from './closedDistricts'
import { UndefinedCommandHandler } from './undefined'
import { AccomodationCommandHandler } from './accomodation'
import { SimCardCommandHandler } from './simCard'
import { TransfersCommandHandler } from './transfers'
import { MoneyTransfersCommandHandler } from './moneyTransfers'
import { BankAccountCommandHandler } from './bankAccount'

export class CommandFactory {
  static getHandler(command: Command): CommandHandler {
    switch (command) {
      case 'start':
        return new StartCommandHandler()
      case 'residencepermit':
        return new ResidencePermitCommandHandler()
      case 'closeddistricts':
        return new ClosedDistrictsCommandHandler()
      case 'accomodation':
        return new AccomodationCommandHandler()
      case 'simcard':
        return new SimCardCommandHandler()
      case 'transfers':
        return new TransfersCommandHandler()
      case 'moneytransfers':
        return new MoneyTransfersCommandHandler()
      case 'bankaccount':
        return new BankAccountCommandHandler()
      default:
        return new UndefinedCommandHandler()
    }
  }
}
