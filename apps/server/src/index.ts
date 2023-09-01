import { LoggerFactory, NodeLogger } from "@pkg/logger"

import { environment } from "./configs/environment.js"
import { Server } from "./server.js"
import { DomainFactory } from "./domain/domain.factory.js"

async function main() {
  try {
    const port = environment.port

    LoggerFactory.factory = (ctx: string) => NodeLogger.factory(environment.logLevel, ctx)

    const domain = DomainFactory.of()
    const server = Server.of(domain)

    await server.listen(port)

    console.log("  App is running at http://localhost:%d", port)
    console.log("  Press CTRL-C to stop\n")
  } catch (error) {
    console.error(error)
  }
}

main()
