import { Router } from 'express'
import bot from './bot'

export default () => {
  const routes = Router()

  routes.use('/bot', bot())

  return routes
}
