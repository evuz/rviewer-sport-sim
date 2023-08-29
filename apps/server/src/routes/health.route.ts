import { Route, RouteMethod } from "@pkg/server"

import { HealthController } from "../controllers/health.controller.js"

export class HealthRoute extends Route {
  static factory() {
    return new HealthRoute(new HealthController())
  }

  protected method: RouteMethod = "get"
  protected path = "/health"
}
