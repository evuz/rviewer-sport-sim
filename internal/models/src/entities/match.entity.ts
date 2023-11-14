import { Sport } from "../enum/sport.enum.js"

import { FootballResult, BasketballResult, TennisResult } from "./result.entity"

export enum MatchState {
  Scheduled,
  InProgress,
  Finished,
}

export class Match<Result = unknown> {
  constructor(
    public id: string,
    public players: string[],
    public sport: Sport,
    public state: MatchState,
    public startAt: number,
    public result?: Result,
  ) {}
}

export class FootballMatch extends Match<FootballResult> {}
export class BasketballMatch extends Match<BasketballResult> {}
export class TennisMatch extends Match<TennisResult> {}
