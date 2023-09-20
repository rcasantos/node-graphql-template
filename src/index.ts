import app from './config/app'

app.listen(process.env.PORT, (): void => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
