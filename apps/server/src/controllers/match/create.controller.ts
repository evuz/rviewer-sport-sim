import { Controller, HttpStatus, ServerResponse } from "@pkg/server"
import { BusinessDeps } from "@internal/business"

type Deps = {
  srvs: {
    match: {
      create: BusinessDeps<"srvs.match.create">
    }
  }
}

type Response = {
  ts: number
}

export class CreateMatchController implements Controller {
  static factory(deps: Deps) {
    return new CreateMatchController(deps)
  }

  constructor(private deps: Deps) {}

  async handler(): Promise<ServerResponse<Response>> {
    this.deps.srvs.match.create.execute({
      startAt: Date.now(),
    })
    return { code: HttpStatus.OK, body: { ts: Date.now() } }
  }
}
