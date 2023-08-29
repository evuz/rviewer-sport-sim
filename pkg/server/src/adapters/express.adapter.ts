import express, { Express, NextFunction, Request, Response } from "express"
import bodyParser from "body-parser"
import cors from "cors"

import { ServerError } from "../server.error.js"
import { Route } from "../route.js"
import { Handler } from "../server.types.js"
import { HttpStatus } from "../status.enum.js"

import type { Server } from "./server.adapter.js"

function parseRequest(handler: Handler) {
  return async ({ headers, body, params, query }: Request, res: Response, next: NextFunction) => {
    try {
      const response = await handler({
        body,
        params,
        query,
        headers,
      })

      res.status(response.code).send(response.body)
    } catch (error) {
      next(error)
    }
  }
}

export class ExpressServer implements Server {
  public app: Express

  constructor() {
    this.app = express()

    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  get(path: string, handler: Handler): Server {
    this.app.get(path, parseRequest(handler))
    return this
  }

  post(path: string, handler: Handler): Server {
    this.app.post(path, parseRequest(handler))
    return this
  }

  put(path: string, handler: Handler): Server {
    this.app.put(path, parseRequest(handler))
    return this
  }

  patch(path: string, handler: Handler): Server {
    this.app.patch(path, parseRequest(handler))
    return this
  }

  delete(path: string, handler: Handler): Server {
    this.app.delete(path, parseRequest(handler))
    return this
  }

  addRoute(route: Route): Server {
    route.import(this)
    return this
  }

  addRoutes(routes: any[]): Server {
    routes.forEach((route) => route.import(this))
    return this
  }

  async listen(port: number): Promise<void> {
    this.app.use((_req, res) => {
      const error = new ServerError(HttpStatus.NOT_FOUND, "Route not found")

      res.status(error.statusCode).send({
        code: error.statusCode,
        message: error.message,
      })
    })

    this.app.use(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err: ServerError, _req: Request, res: Response, _next: NextFunction) => {
        if (!(err instanceof ServerError)) {
          err = new ServerError(HttpStatus.INTERNAL_SERVER_ERROR, "Something broken!")
        }

        return res.status(err.statusCode).send({ error: err.message })
      },
    )

    return new Promise((resolve) => {
      this.app.listen(port, () => {
        resolve()
      })
    })
  }
}
