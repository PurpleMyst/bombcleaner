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
  public image = document.createElement("img") as HTMLImageElement;

  public isMine = false;
  public isRevealed = false;
  public isFlagged = false;

  constructor(public x: number, public y: number) {
    this.image.src = SquareImage.UNEXPLORED;
  }

  reveal(mineNeighbors: number) {
    if (this.isFlagged) return;
    this.isRevealed = true;
    this.image.src = this.isMine
      ? SquareImage.MINEHIT
      : imageForNumber(mineNeighbors);
  }

  flag() {
    this.isFlagged = !this.isFlagged;
    this.image.src = this.isFlagged ? SquareImage.FLAG : SquareImage.UNEXPLORED;
  }
}
