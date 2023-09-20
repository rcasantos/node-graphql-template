import http from 'node:http'
import type { Express } from 'express'

export default (app: Express): any => {
  return http.createServer(app)
}
