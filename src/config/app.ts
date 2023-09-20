import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import setupMiddlewares from './middlewares'
import http from './http'
import ApolloServer from './apollo'

const app = express()
const httpServer = http(app)

const setupServer = async (): Promise<void> => {
  const server = await ApolloServer(httpServer)
  await server.start()

  setupMiddlewares(app, server)
}

void setupServer()

export default httpServer
