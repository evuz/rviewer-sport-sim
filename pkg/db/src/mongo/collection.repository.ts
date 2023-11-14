import { Collection, ObjectId } from "mongodb"

import { DatabaseCollection, DatabaseEntity } from "../db.types.js"

type Schema = { _id: ObjectId }
type Mappers<T, K> = {
  create(entity: T): K
  update(entity: Partial<T>): Partial<K>
  get(schema: K): T
}

export abstract class MongoDatabaseCollection<T extends DatabaseEntity, K extends Schema>
  implements DatabaseCollection<T>
{
  protected abstract mappers: Mappers<T, K>
  public collection!: Collection<K>

  id() {
    return new ObjectId()
  }

  async start(): Promise<void> {
    return Promise.resolve()
  }

  async create(entity: T): Promise<T> {
    const schema = this.mappers.create(entity)
    const data = await this.collection.insertOne(schema as any)

    entity.id = data.insertedId.toString()

    return entity
  }

  async update(id: T["id"], props: Partial<T>): Promise<void> {
    const objectId = new ObjectId(id) as any
    const schema = this.mappers.update(props)
    await this.collection.updateOne({ _id: objectId }, { $set: schema })
  }

  async get(id: string): Promise<T> {
    const objectId = new ObjectId(id) as any
    const data = await this.collection.findOne({ _id: objectId })

    if (!data) {
      throw Error("Document does not exist")
    }

    return this.mappers.get(data as any)
  }
}
