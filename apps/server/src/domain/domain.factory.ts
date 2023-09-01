import { CreateMatchService, GetMatchService } from "@internal/business"

import { Domain } from "./domain.types.js"

export class DomainFactory {
  static of(): Domain {
    return {
      srvs: {
        match: {
          create: new CreateMatchService(),
          get: new GetMatchService(),
        },
      },
    }
  }
}
