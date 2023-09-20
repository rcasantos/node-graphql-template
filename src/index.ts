import httpServer from './config/app'
import { AppDataSource } from './config/data-source'

const bootstrap = async (): Promise<void> => {
  await new Promise<void>((resolve) => httpServer.listen({ port: process.env.PORT }, resolve))
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/`)
}

void AppDataSource.initialize().then(() => {
  void bootstrap()
})
