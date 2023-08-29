import type { Logger } from "./logger.adapter"

export class LoggerFactory {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static factory(_context: string): Logger {
    throw Error("Implement logger factory")
  }
}
