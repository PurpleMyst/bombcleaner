import { shuffle, createSquareGridTemplate } from "./utils";
import { Square } from "./square";

const MINE_DISTRIBUTION = 1 / 10;

export class Grid {
  public container: HTMLElement = document.createElement("div");
  public squares: Square[] = [];

  constructor(public side: number) {
    this.container.style.display = "inline-grid";
    this.container.style.gridGap = "0";
    this.container.style.gridTemplate = createSquareGridTemplate(this.side);

    this.container.style.position = "absolute";
    this.container.style.left = this.container.style.top = "50%";
    this.container.style.transform = "translate(-50%, -50%)";

    for (let y = 0; y < this.side; ++y) {
      for (let x = 0; x < this.side; ++x) {
        const square = new Square(x, y);
        this.squares.push(square);
        this.container.appendChild(square.image);
        square.image.addEventListener("contextmenu", e => e.preventDefault());
        square.image.addEventListener("mousedown", event => {
          if (event.buttons & 2) this.flagSquare(x, y);
          else this.revealSquare(x, y);
        });
      }
    }

    const nonMineSquares = this.squares.slice();
    shuffle(nonMineSquares);
    for (let i = 0; i < this.squares.length * MINE_DISTRIBUTION; ++i) {
      nonMineSquares.pop()!.isMine = true;
    }
  }

  getSquare(x: number, y: number): Square {
    return this.squares[y * this.side + x];
  }

  neighbors(x: number, y: number): Square[] {
    const result = [];
    for (let xc = -1; xc <= 1; ++xc) {
      for (let yc = -1; yc <= 1; ++yc) {
        if (xc == 0 && yc == 0) continue;
        const nx = x + xc;
        const ny = y + yc;

        if (nx < 0 || ny < 0 || nx >= this.side || ny >= this.side) continue;

        result.push(this.getSquare(nx, ny));
      }
    }
    return result;
  }

  revealSquare(x: number, y: number) {
    if (this.getSquare(x, y).isRevealed) return;
    const neighbors = Array.from(this.neighbors(x, y));
    const mineNeighbors = neighbors.filter(sq => sq.isMine).length;

    this.getSquare(x, y).reveal(mineNeighbors);
    if (mineNeighbors == 0)
      requestAnimationFrame(() =>
        neighbors.forEach(sq => this.revealSquare(sq.x, sq.y))
      );
  }

  flagSquare(x: number, y: number) {
    this.getSquare(x, y).flag();
  }
}
