export interface Winner {
  name: string,
  color: string,
  id: number,
  wins: number,
  time: number
}

export interface WinnerRequest {
  id: number,
  wins: number,
  time: number
}
