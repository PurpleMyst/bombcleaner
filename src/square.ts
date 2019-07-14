export enum SquareState {
  FLAG = "flag",
  MINE = "mine",
  MINE_HIT = "mine_hit",
  UNEXPLORED = "unexplored"
}

import * as SquareImage from "./squareImages";

const imageForNumber = (n: number): string => {
  switch (n) {
    case 0:
      return SquareImage.ZERO;
    case 1:
      return SquareImage.ONE;
    case 2:
      return SquareImage.TWO;
    case 3:
      return SquareImage.THREE;
    case 4:
      return SquareImage.FOUR;
    case 5:
      return SquareImage.FIVE;
    case 6:
      return SquareImage.SIX;
    case 7:
      return SquareImage.SEVEN;
    case 8:
      return SquareImage.EIGHT;
    default:
      throw new Error(`Invalid square image number ${n}`);
  }
};

export class Square {
  public state: SquareState = SquareState.UNEXPLORED;
  public image: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  public isMine: boolean = false;

  constructor() {
    this.image.src = SquareImage.UNEXPLORED;
  }

  reveal(neighbors: number) {
    this.image.src = this.isMine
      ? SquareImage.MINEHIT
      : imageForNumber(neighbors);
  }
}
