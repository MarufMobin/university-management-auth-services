import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database Connected Successfully`)
    app.listen(config.port, () => {
      logger.info(`Application Listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed To Connect Database', err)
  }
}
boostrap()
