import { ExpressServer } from "@pkg/server"

import { Routes } from "./routes/routes.factory.js"
import { ControllersFactory } from "./controllers/controllers.factory.js"

export class Server {
  static of() {
    const server = new ExpressServer()

    const ctrls = ControllersFactory.of()
    const routes = Routes.of(ctrls)

    routes.forEach((route) => {
      server.addRoute(route)
    })

    return server
  }
}
