import type { Route } from "../route"
import type { Handler } from "../server.types"

export type Server = {
  get(path: string, handler: Handler): Server
  post(path: string, handler: Handler): Server
  put(path: string, handler: Handler): Server
  patch(path: string, handler: Handler): Server
  delete(path: string, handler: Handler): Server
  addRoute(route: Route): Server
  addRoutes(routes: Route[]): Server
  listen(port: number): Promise<void>
}
