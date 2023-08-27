import { Logger, LogLevel } from "./logger.adapter.js"

type PrintArgs = {
  level: LogLevel
  log: Function
  message: string | Object
  type: string
}

type Console = typeof console

const TextStyle = {
  Clear: "\x1b[0m",
  Bold: "\x1b[1m",
}

const TextColor = {
  Yellow: "\x1b[33m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Blue: "\x1b[1;36m",
}

export class NodeLogger implements Logger {
  static factory(level: LogLevel = LogLevel.info, context: string) {
    return new NodeLogger(level, context, console)
  }

  constructor(
    private level: LogLevel = LogLevel.info,
    private context: string,
    private console: Console,
  ) {}

  private _checkLevel(level: LogLevel) {
    return level <= this.level
  }

  private _print({ level, log, message, type }: PrintArgs) {
    if (!this._checkLevel(level)) {
      return
    }

    log(`${TextStyle.Bold}${type}${TextStyle.Clear}`, this.context, message)
  }

  log(message: string | Object) {
    this._print({
      level: LogLevel.info,
      log: this.console.log,
      message,
      type: `${TextColor.Blue}[Log]`,
    })
  }

  debug(message: string | Object) {
    this._print({
      level: LogLevel.debug,
      log: this.console.debug,
      message,
      type: `${TextColor.Green}[Debug]`,
    })
  }

  warn(message: string | Object) {
    this._print({
      level: LogLevel.warning,
      log: this.console.warn,
      message,
      type: `${TextColor.Yellow}[Warning]`,
    })
  }

  error(message: string | Object) {
    this._print({
      level: LogLevel.error,
      log: this.console.error,
      message,
      type: `${TextColor.Red}[Error]`,
    })
  }
}
