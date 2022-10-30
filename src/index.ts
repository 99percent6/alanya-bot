import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from 'config'
import healthcheck from 'express-healthcheck'
import routes from './routes'
import { logError, sendError } from './middlewares'
import { AppLogger } from './libs'

const app = express()
const logger = new AppLogger()

app.use(bodyParser.json({
  limit: config.get('bodyParser.limit'),
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  exposedHeaders: config.get('corsHeaders'),
}))
app.use('/healthcheck', healthcheck())
app.use('/api', routes())
app.use(logError)
app.use(sendError)

const port: string = config.get('server.port')
const host: string = config.get('server.host')
app.listen(parseInt(port, 10), host, () => {
  logger.log(`Alanya BOT started at http://${host}:${port}.`)
})

export default app
