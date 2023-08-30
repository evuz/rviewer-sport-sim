import type { Controllers } from "./controllers.types.js"
import { CreateMatchController } from "./match/create.controller.js"

export class ControllersFactory {
  static of(): Controllers {
    return {
      match: {
        create: CreateMatchController.factory(),
      },
    }
  }
}
