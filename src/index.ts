import express from 'express'

const app = express()

app.listen(4000, (): void => {
  console.log(`Server running at http://localhost:${4000}`)
})
