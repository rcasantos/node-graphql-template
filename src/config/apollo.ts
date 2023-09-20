import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { buildSchema } from 'type-graphql'
import path from 'node:path'
import fg from 'fast-glob'
import type { MyContext } from '../types'

export default async (httpServer: any): Promise<any> => {
  const resolversList: any = []

  for (const file of fg.sync('**/src/apps/**/resolvers/*.ts')) {
    const fileImport = await import(`../../${file}`)
    if (Object.values(fileImport)[0]) {
      resolversList.push(Object.values(fileImport)[0])
    }
  }

  const schema = await buildSchema({
    resolvers: resolversList,
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  return server
}
