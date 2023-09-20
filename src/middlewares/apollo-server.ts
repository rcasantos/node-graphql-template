import { expressMiddleware } from '@apollo/server/express4'
import type { ApolloServer } from '@apollo/server'
import type { MyContext } from '../types'

export const apolloMiddleware = (server: ApolloServer): any => {
  return expressMiddleware(server, {
    context: async ({ req, res }: MyContext) => ({ req, res })
  })
}
