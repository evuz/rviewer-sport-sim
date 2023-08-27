import type { IncomingHttpHeaders } from "http"

import type { HttpStatus } from "./status.enum"

export type Controller = {
  handler: Handler
}

export type Middleware = {
  handler: Handler
}

export type ServerRequest<Body = any, Query = any, Params = any> = {
  body: Body
  query: Query
  params: Params
  headers: IncomingHttpHeaders
}
export type ServerResponse<T> = { code: HttpStatus; body: T }
export type Handler = (request: ServerRequest) => Promise<ServerResponse<any>>
