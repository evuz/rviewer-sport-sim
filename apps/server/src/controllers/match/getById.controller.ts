import { Controller, HttpStatus, ServerRequest, ServerResponse } from "@pkg/server"

type Params = { id: string }
type Request = ServerRequest<unknown, unknown, Params>

type BodyResponse = {
  id: string
}
type Response = ServerResponse<BodyResponse>

export class GetMatchByIdController implements Controller {
  static factory() {
    return new GetMatchByIdController()
  }

  async handler(req: Request): Promise<Response> {
    const { id } = req.params

    return { code: HttpStatus.OK, body: { id } }
  }
}
