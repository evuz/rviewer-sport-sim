import { ExpressServer } from "@pkg/server"
import { BusinessContainer } from "@internal/business"

import { Routes } from "./routes/routes.factory.js"
import { ControllersFactory } from "./controllers/controllers.factory.js"

export class Server {
  static of(domain: BusinessContainer) {
    const server = new ExpressServer()

    const ctrls = ControllersFactory.of(domain)
    const routes = Routes.of(ctrls)

    routes.forEach((route) => {
      server.addRoute(route)
    })

    return server
  }
}
