import { Route, RouteMethod } from "@pkg/server"

import { Controllers } from "../../controllers/controllers.types"

export class GetMatchByIdRoute extends Route {
  static factory(ctrls: Controllers) {
    return new GetMatchByIdRoute(ctrls.match.getById)
  }

  protected method: RouteMethod = "get"
  protected path = "/match/:id"
}
