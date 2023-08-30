import type { Controllers } from "./controllers.types.js"
import { CreateMatchController } from "./match/create.controller.js"
import { GetMatchByIdController } from "./match/getById.controller.js"

export class ControllersFactory {
  static of(): Controllers {
    return {
      match: {
        create: CreateMatchController.factory(),
        getById: GetMatchByIdController.factory(),
      },
    }
  }
}
