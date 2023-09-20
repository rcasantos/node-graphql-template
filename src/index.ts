import 'dotenv/config'
import express from 'express'
import { bodyParser, contentType } from './middlewares'

const app = express()
app.use(bodyParser)
app.use(contentType)

app.listen(process.env.PORT, (): void => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
