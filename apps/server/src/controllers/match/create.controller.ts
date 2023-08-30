import { Controller, HttpStatus, ServerResponse } from "@pkg/server"

type Response = {
  ts: number
}

export class CreateMatchController implements Controller {
  static factory() {
    return new CreateMatchController()
  }

  async handler(): Promise<ServerResponse<Response>> {
    return { code: HttpStatus.OK, body: { ts: Date.now() } }
  }
}
