import { Grid } from "./grid";

const GRID_SIDE = 24;

const main = () => {
  const grid = new Grid(GRID_SIDE);
  document.body.appendChild(grid.container);
};

main();
