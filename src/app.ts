import express, { Application, Request, Response } from 'express'
import cors from 'cors'

// use Express
const app: Application = express()

// use Cors
app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
