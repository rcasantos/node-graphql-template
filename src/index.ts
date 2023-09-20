import 'dotenv/config'
import express from 'express'

const app = express()

app.listen(process.env.PORT, (): void => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
