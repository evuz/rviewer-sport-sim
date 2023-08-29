import type { HttpStatus } from "./status.enum"

export class ServerError extends Error {
  constructor(
    public statusCode: HttpStatus,
    public message: string,
  ) {
    super()
  }
}
