import { MongoClient } from "mongodb"

import type { DatabaseCollections, DatabaseRepository } from "../db.types"

import { MongoDatabaseCollection } from "./collection.repository.js"

export abstract class MongoDatabaseRepository<T extends DatabaseCollections<any>> implements DatabaseRepository<T> {
  private client: MongoClient
  protected abstract collections: T

  constructor(
    uri: string,
    public db: string,
  ) {
    this.client = new MongoClient(uri)
  }

  async start(): Promise<void> {
    await this.client.connect()

    const db = this.client.db(this.db)
    Object.keys(this.collections).forEach((collectionName) => {
      const collection = this.collections[collectionName] as MongoDatabaseCollection<any, any>

      collection.collection = db.collection(collectionName)
    })
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.collections[key]
  }
}
