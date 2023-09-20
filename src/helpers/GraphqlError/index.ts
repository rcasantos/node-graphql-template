import type { ErrorTypes } from '../../types'
import { GraphQLError } from 'graphql'

export const throwError = (message: string, error: ErrorTypes): void => {
  throw new GraphQLError(message, {
    extensions: {
      code: error
    }
  })
}
