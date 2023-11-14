export type DatabaseEntity = { id: string | number; [e: string]: any }
export type DatabaseEntities = Record<string, DatabaseEntity>
export interface DatabaseCollection<T extends DatabaseEntity> {
  start(): Promise<void>
  create(entity: T): Promise<T>
  update(id: T["id"], props: Partial<T>): Promise<void>
  get(id: T["id"]): Promise<T>
}

export type DatabaseCollections<T extends DatabaseEntities> = {
  [P in keyof T]: DatabaseCollection<T[P]>
}
export interface DatabaseRepository<T extends DatabaseCollections<any>> {
  start(): Promise<void>
  get<K extends keyof T>(key: K): T[K]
}
