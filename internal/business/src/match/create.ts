import { LoggerFactory } from "@pkg/logger"

type Params = {
  startAt: number
}

export class CreateMatchService {
  logger = LoggerFactory.factory("CreateMatchService")

  execute(match: Params) {
    this.logger.log(match)
  }
}
