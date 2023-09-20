import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import setupMiddlewares from './middlewares'

const app = express()
setupMiddlewares(app)

export default app
