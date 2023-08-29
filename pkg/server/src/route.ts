import { LoggerFactory } from "@pkg/logger"

import type { Server } from "./adapters/server.adapter"
import type { Middleware, Controller } from "./server.types"

export type RouteMethod = "get" | "post" | "put" | "patch" | "delete"

type Optionals = {
  middlewares?: Middleware[]
}

export abstract class Route {
  protected abstract method: RouteMethod
  protected abstract path: string

  protected controller: Controller
  protected middlewares?: Middleware[]

  constructor(controller: Controller, { middlewares }: Optionals = {}) {
    this.controller = controller
    if (middlewares) {
      this.middlewares = middlewares
    }
  }

  import(server: Server) {
    const logger = LoggerFactory.factory(`${this.method} ${this.path}`)

    server[this.method](this.path, async (request) => {
      try {
        logger.log({
          request: {
            params: request.params,
            body: request.body,
            query: request.query,
          },
        })
        if (this.middlewares) {
          for (const middleware of this.middlewares) {
            await middleware.handler(request)
          }
        }

        const response = await this.controller.handler(request)

        logger.log({ response })
        return response
      } catch (error) {
        logger.error((error as any)?.message)
        throw error
      }
    })
  }
}
