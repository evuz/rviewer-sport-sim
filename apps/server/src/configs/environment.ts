import { LogLevel } from "@pkg/logger"

export const environment = {
  port: +(process.env.PORT || 8000),
  logLevel: (process.env.LOGS_LEVEL || LogLevel.info) as LogLevel,
}
