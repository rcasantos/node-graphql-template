import type { Express } from 'express'
import type { ApolloServer } from '@apollo/server'
import { bodyParser, contentType, cors, apolloMiddleware } from '../middlewares'

export default (app: Express, server: ApolloServer): void => {
  app.use(bodyParser)
  app.use(contentType)
  app.use(cors)
  app.use(
    '/graphql',
    apolloMiddleware(server)
  )
}
