import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRoter from './app/modules/users/users.route'

// use Express
const app: Application = express()

// use Cors
app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRoter)

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
