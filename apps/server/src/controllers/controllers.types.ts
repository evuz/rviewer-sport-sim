import { CreateMatchController } from "./match/create.controller"
import { GetMatchByIdController } from "./match/getById.controller"

export type Controllers = {
  match: {
    create: CreateMatchController
    getById: GetMatchByIdController
  }
}
