import { Request, Response } from 'express'
import { BotService } from '../services'
import { HttpHandler } from '../libs'

export class BotController {
  static async webhook(req: Request, res: Response) {
    await BotService.webhook(req.body)
    HttpHandler.sendResponse({ res, result: true })
  }
}
