/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server
async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)

    logger.info(`Database Connected Successfully`)

    server = app.listen(config.port, () => {
      logger.info(`Application Listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed To Connect Database', err)
  }
  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection is detected, We are closing our Server')
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
boostrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')

  if (server) {
    server.close()
  }
})
