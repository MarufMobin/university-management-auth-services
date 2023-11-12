import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database Connected Successfully`)
    app.listen(config.port, () => {
      console.log(`Application Listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed To Connect Database', err)
  }
}
boostrap()
