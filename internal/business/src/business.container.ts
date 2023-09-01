import type { NestedPaths, TypeFromPath } from "./utils.types"
import { CreateMatchService } from "./match/create.js"
import { GetMatchService } from "./match/get"

export type BusinessContainer = {
  srvs: {
    match: {
      create: CreateMatchService
      get: GetMatchService
    }
  }
}

export type BusinessDeps<K extends NestedPaths<BusinessContainer>> = TypeFromPath<BusinessContainer, K>
