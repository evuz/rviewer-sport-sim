export class FootballResult {
  constructor(
    public home: number,
    public away: number,
  ) {}
}

export class BasketballResult {
  constructor(
    public home: number,
    public away: number,
  ) {}
}

type TennisTieBreak = { a: number; b: number }
type TennisSet = { a: number; b: number; tieBreak?: TennisTieBreak }
export class TennisResult {
  constructor(public sets: TennisSet) {}
}
