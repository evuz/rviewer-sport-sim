import { Controller, ServerResponse } from "@pkg/server"

type Response = {
  ts: number
}
export class HealthController implements Controller {
  static factory(): HealthController {
    return new HealthController()
  }

  async handler(): Promise<ServerResponse<Response>> {
    return { code: 200, body: { ts: Date.now() } }
  }
}
