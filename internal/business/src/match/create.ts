import { LoggerFactory } from "@pkg/logger"

import { Match } from "../../../models/src"

type Params = {
  startAt: Match["startAt"]
}

export class CreateMatchService {
  logger = LoggerFactory.factory("CreateMatchService")

  execute(match: Params) {
    this.logger.log(match)
  }
}
