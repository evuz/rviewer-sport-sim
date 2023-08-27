import { ExpressServer } from "./pkg/server/index.js"
import { HealthRoute } from "./routes/health.route.js"

export function createServer() {
  const server = new ExpressServer()

  server.addRoute(HealthRoute.factory())

  return server
}
