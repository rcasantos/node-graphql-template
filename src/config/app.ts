import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import setupMiddlewares from './middlewares'
import http from './http'

const app = express()
const httpServer = http(app)
setupMiddlewares(app)

export default httpServer
