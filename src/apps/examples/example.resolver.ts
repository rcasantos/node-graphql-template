import { Resolver, Query } from 'type-graphql'
import { LoggerAdapter } from '../../infra'

@Resolver()
export class ExampleResolver {
  constructor (
    private readonly logger = new LoggerAdapter()
  ) {}

  @Query(() => Boolean)
  async example (): Promise<boolean> {
    this.logger.info('Call example query')
    return true
  }
}
