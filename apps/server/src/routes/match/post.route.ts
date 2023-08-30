import { Route, RouteMethod } from "@pkg/server"

import { Controllers } from "../../controllers/controllers.types.js"

export class PostMatchRoute extends Route {
  static factory(ctrls: Controllers) {
    return new PostMatchRoute(ctrls.match.create)
  }

  protected method: RouteMethod = "post"
  protected path = "/match"
}
