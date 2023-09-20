import type { Request, Response } from 'express'

export interface MyContext {
  req: Request
  res: Response
}

export type ErrorTypes = 'GRAPHQL_VALIDATION_FAILED' | 'BAD_USER_INPUT' | 'PERSISTED_QUERY_NOT_FOUND' | 'PERSISTED_QUERY_NOT_SUPPORTED' | 'OPERATION_RESOLUTION_FAILURE' | 'BAD_REQUEST' | 'INTERNAL_SERVER_ERROR' | string
