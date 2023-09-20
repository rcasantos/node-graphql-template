import 'dotenv/config'
import express from 'express'
import { bodyParser } from './middlewares'

const app = express()
app.use(bodyParser)

app.listen(process.env.PORT, (): void => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
