import { Resolver, Query } from 'type-graphql'

@Resolver()
export class ExampleResolver {
  @Query(() => Boolean)
  async example (): Promise<boolean> {
    return true
  }
}
