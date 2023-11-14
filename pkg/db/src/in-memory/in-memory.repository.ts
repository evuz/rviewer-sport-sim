import type { DatabaseCollections, DatabaseRepository } from '../db.types'

export abstract class InMemoryDatabaseRepository<
  T extends DatabaseCollections<any>
> implements DatabaseRepository<T>
{
  protected abstract collections: T

  start(): Promise<void> {
    return Promise.resolve()
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.collections[key]
  }
}
