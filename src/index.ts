import { Square } from "./square";
import { createSquareGridTemplate } from "./utils";

const GRID_SIDE = 4;

const main = () => {
  const container = document.createElement("div");
  container.style.display = "inline-grid";
  container.style.gridGap = "0";
  container.style.gridTemplate = createSquareGridTemplate(GRID_SIDE);

  container.style.position = "absolute";
  container.style.left = container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%)";

  for (let y = 0; y < GRID_SIDE; ++y) {
    for (let x = 0; x < GRID_SIDE; ++x) {
      const mine = new Square(false);
      container.appendChild(mine.image);
    }
  }

  document.body.appendChild(container);
};

main();
