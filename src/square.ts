export enum SquareState {
  FLAG = "flag",
  MINE = "mine",
  MINE_HIT = "mine_hit",
  UNEXPLORED = "unexplored",
}
import * as SquareImage from "./squareImages";

export class Square {
  public state: SquareState = SquareState.UNEXPLORED;
  public image: HTMLImageElement = document.createElement("img") as HTMLImageElement;

  constructor(public isMine: boolean) {
    this.image.src = SquareImage.UNEXPLORED;
  }
}
