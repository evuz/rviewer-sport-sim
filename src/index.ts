import { environment } from "./configs/environment.js"
import { LoggerFactory, NodeLogger } from "./pkg/logger/index.js"
import { createServer } from "./server.js"

async function main() {
  try {
    const port = environment.port

    LoggerFactory.factory = (ctx: string) => NodeLogger.factory(environment.logLevel, ctx)
    const server = createServer()

    await server.listen(port)

    console.log("  App is running at http://localhost:%d", port)
    console.log("  Press CTRL-C to stop\n")
  } catch (error) {
    console.error(error)
  }
}

main()
