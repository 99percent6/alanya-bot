import { Router } from 'express'
import { asyncWrapper } from '../../libs'
import { BotController } from '../../controllers'

export default () => {
  const routes = Router()

  routes.post('/webhook', asyncWrapper(BotController.webhook))

  return routes
}
