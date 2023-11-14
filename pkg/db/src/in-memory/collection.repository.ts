import crypto from "crypto"

import type { DatabaseCollection, DatabaseEntity } from "../db.types"

export class InMemoryDatabaseCollection<T extends DatabaseEntity> implements DatabaseCollection<T> {
  private memory: Record<T["id"], T> = {} as any

  start(): Promise<void> {
    return Promise.resolve()
  }

  async create(entity: T): Promise<T> {
    const id = crypto.randomUUID()
    entity.id = id

    this.memory[id] = entity

    return entity
  }

  async update(id: string, props: Partial<T>): Promise<void> {
    const entity = this.memory[id]

    if (!entity) {
      throw Error(`Entity with id ${id} doesn't exist`)
    }

    Object.keys(props).forEach((key) => {
      entity[key] = props[key]
    })

    return entity
  }

  async get(id: T["id"]): Promise<T> {
    const entity = this.memory[id]

    if (!entity) {
      throw Error(`Entity with id ${id.toString()} doesn't exist`)
    }

    return entity
  }
}
