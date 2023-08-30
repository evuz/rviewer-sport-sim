import type { Controllers } from "../controllers/controllers.types.js"

import { HealthRoute } from "./health.route.js"
import { GetMatchByIdRoute } from "./match/getById.route.js"
import { PostMatchRoute } from "./match/post.route.js"

export class Routes {
  static of(ctrls: Controllers) {
    return [HealthRoute.factory(), PostMatchRoute.factory(ctrls), GetMatchByIdRoute.factory(ctrls)]
  }
}
