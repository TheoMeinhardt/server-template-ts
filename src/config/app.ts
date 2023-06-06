import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import { config as dotenvConfig } from 'dotenv'

import { testRouter } from '../api/routes'

dotenvConfig()

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

app.use('/test', testRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
