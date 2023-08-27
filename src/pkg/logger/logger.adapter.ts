export enum LogLevel {
  error,
  warning,
  info,
  debug,
}

export type Logger = {
  debug: (message: string | Object) => void
  log: (message: string | Object) => void
  warn: (message: string | Object) => void
  error: (message: string | Object) => void
}
