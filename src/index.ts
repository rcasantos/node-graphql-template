import app from './config/app'
import { AppDataSource } from './config/data-source'

void AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT, (): void => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
})
